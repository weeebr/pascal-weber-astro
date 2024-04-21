import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});