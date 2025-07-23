import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';


export default defineConfig({
  integrations: [
    starlight({
      title: 'How To Git',
      description: 'A guide to Git',
      plugins: [starlightThemeFlexoki()],
    })
  ]
});