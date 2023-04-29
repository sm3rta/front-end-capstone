import { router } from "../main";

export const mainSiteLinks: Array<{ label: string; to: (typeof router)["types"]["RoutesInfo"]["routeIds"] }> = [
  { label: "Home", to: "/" },
  { label: "Reserve a table", to: "/book" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
];
