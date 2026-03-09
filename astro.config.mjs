import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://fertechpro.com',
  integrations: [sitemap(), mdx(), react()],
});