import { ThemeProvider } from "@mui/material";
import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { afterEach, expect } from "vitest";
import { theme } from "../theme";
import { CartProvider } from "../utils/useCart";

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
