import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import netlify from "@astrojs/netlify";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), tailwind()],
  output: "server",
  adapter: netlify(),
});
