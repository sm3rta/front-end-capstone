export type MenuItem = {
  id: string;
  title: string;
  price: number;
  photoUrl: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Fries",
    price: 7.99,
    photoUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Pancakes with Berries",
    price: 12.99,
    photoUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: "3",
    title: "Mac And Cheese",
    price: 21.99,
    photoUrl:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    title: "Chicken And Rice",
    price: 12.99,
    photoUrl:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    title: "Waffles",
    price: 13.99,
    photoUrl:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "6",
    title: "Fries",
    price: 14.99,
    photoUrl:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "7",
    title: "Chicken Salad",
    price: 15.99,
    photoUrl:
      "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "8",
    title: "Pasta",
    price: 16.99,
    photoUrl:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "9",
    title: "Pizza",
    price: 17.99,
    photoUrl:
      "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "10",
    title: "Humus And Falafel",
    price: 18.99,
    photoUrl:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "11",
    title: "Steak",
    price: 19.99,
    photoUrl:
      "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "12",
    title: "Burger",
    price: 20.99,
    photoUrl:
      "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "13",
    title: "Chicken Sandwich",
    price: 11.99,
    photoUrl:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "14",
    title: "Chicken Wings",
    price: 22.99,
    photoUrl:
      "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "15",
    title: "Shrimp",
    price: 23.99,
    photoUrl:
      "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "16",
    title: "Shrimp and Chorizo Paella",
    price: 26.99,
    photoUrl:
      "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const featuredMenuItems = [menuItems[12], menuItems[4], menuItems[8]];
