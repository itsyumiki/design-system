// astro.config.mjs
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import lenis from "astro-lenis";

export default defineConfig({
  build: {
    assets: "assets",
    format: "preserve",
    //    assetsPrefix: 'https://cdn.example.com',
    //     inlineStylesheets: `auto`,
  },
  server: {
    host: true,
    allowedHosts: ["staging.yumiki.me"],
  },
  integrations: [mdx(), lenis()],
});
