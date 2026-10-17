import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://vet3whale.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
