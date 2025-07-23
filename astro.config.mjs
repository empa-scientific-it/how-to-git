import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import remarkGemoji from 'remark-gemoji';


export default defineConfig({
  site: 'https://how-to-git.netlify.app/',
  markdown: {
    remarkPlugins: [remarkGemoji],
  },
  integrations: [
    starlight({
      title: 'How To Git',
      description: 'A guide to Git',
      plugins: [starlightThemeFlexoki()],
    })
  ]
});