import { Outlet, RootRoute, Route, Router } from "@tanstack/router";
import App from "./App";
import About from "./pages/About";
import Book from "./pages/Book";
import BookSuccess from "./pages/BookSuccess";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export const rootRoute = new RootRoute({
  component: App,
});

export const homeRoute = new Route({
  component: Home,
  getParentRoute: () => rootRoute,
  path: "/",
});

export const bookReservationSuccessRoute = new Route({
  component: BookSuccess,
  getParentRoute: () => bookReservationRoute,
  path: "/success",
});

export const bookReservationRoute = new Route({
  component: () => <Outlet />,
  getParentRoute: () => rootRoute,
  path: "/book",
});

export const bookReservationIndexRoute = new Route({
  component: Book,
  getParentRoute: () => bookReservationRoute,
  path: "/",
});

export const menuRoute = new Route({
  component: Menu,
  getParentRoute: () => rootRoute,
  path: "/menu",
});

export const aboutRoute = new Route({
  component: About,
  getParentRoute: () => rootRoute,
  path: "/about",
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  bookReservationRoute.addChildren([bookReservationIndexRoute, bookReservationSuccessRoute]),
  menuRoute,
  aboutRoute,
]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
