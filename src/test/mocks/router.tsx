import { Outlet, RootRoute, Route, Router, RouterProvider } from "@tanstack/router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = (props: any) => <a {...props} href={props.to} />;

export { Link, Outlet, RootRoute, Route, Router, RouterProvider };
