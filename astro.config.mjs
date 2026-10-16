import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// TODO-DEPLOY: ganti site dengan domain final per bisnis, contoh https://narina-beauty-jambi.com
export default defineConfig({
  site: 'https://ogicafe-jambi.pages.dev',
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
