// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
  locales: ["de", "en", "fr", "it"],
  defaultLocale: "de",
  routing: {
      prefixDefaultLocale: true
  }
},

  integrations: [react()]
});