import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter",
  }],

  integrations: [icon()]
});