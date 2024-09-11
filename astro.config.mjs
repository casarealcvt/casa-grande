import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.casagrandevt.com",
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
});
