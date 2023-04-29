import { RouterProvider } from "@tanstack/router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router";

// Render our app!
const rootElement = document.getElementById("root");
if (rootElement) {
  if (!rootElement?.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  }
}
