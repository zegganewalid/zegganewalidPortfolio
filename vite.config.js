import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/zegganewalidPortfolio/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
