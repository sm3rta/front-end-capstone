import { createContext, useContext, useReducer } from "react";
import { MenuItem } from "./menuItems";

type CartAction =
  | { type: "ADD"; item: MenuItem }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" }
  | { type: "INCREASE"; id: string }
  | { type: "DECREASE"; id: string };

type CartItem = MenuItem & { quantity: number };

const cartReducer = (state: CartItem[], action: CartAction) => {
  let itemInCart: CartItem | undefined;
  switch (action.type) {
    case "ADD":
      if (state.find((item) => item.id === action.item.id)) {
        return state.map((item) => (item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...state, { ...action.item, quantity: 1 }];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    case "INCREASE":
      return state.map((item) => (item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item));
    case "DECREASE":
      itemInCart = state.find((item) => item.id === action.id);
      if (!itemInCart) return state;
      if (itemInCart.quantity === 1) return state.filter((item) => item.id !== action.id);
      return state.map((item) => (item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item));
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = (item: MenuItem) => dispatch({ type: "ADD", item });
  const removeFromCart = (id: string) => dispatch({ type: "REMOVE", id });
  const clearCart = () => dispatch({ type: "CLEAR" });
  const increaseByOne = (id: string) => dispatch({ type: "INCREASE", id });
  const decreaseByOne = (id: string) => dispatch({ type: "DECREASE", id });
  const calculateTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return { cart, addToCart, removeFromCart, clearCart, increaseByOne, decreaseByOne, calculateTotal };
};

export const CartContext = createContext<ReturnType<typeof useCartReducer>>({} as ReturnType<typeof useCartReducer>);

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cart = useCartReducer();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
