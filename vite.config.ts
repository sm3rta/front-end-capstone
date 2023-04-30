/// <reference types="vite/client" />
/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/testUtils.tsx",
    css: false,
    alias: {
      "@tanstack/router": "./src/test/mocks/router.tsx",
    },
  },
});
