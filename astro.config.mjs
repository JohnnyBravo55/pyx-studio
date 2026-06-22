import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  site: "https://pyx-studio.pages.dev",
  adapter: cloudflare()
});