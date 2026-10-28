import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeLiensPublies from './src/plugins/rehype-liens-publies.mjs';

export default defineConfig({
  site: 'https://peinturedecor.fr',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeLiensPublies]
  }
});
