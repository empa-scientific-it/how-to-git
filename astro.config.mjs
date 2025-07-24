import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion as ionTheme } from "starlight-ion-theme";
import remarkGemoji from 'remark-gemoji';


export default defineConfig({
  site: 'https://how-to-git.netlify.app/',
  markdown: {
    remarkPlugins: [
      remarkGemoji,
    ],
  },
  integrations: [
    starlight({
      title: 'How To Git',
      description: 'A guide to Git',
      customCss: [
        "@fontsource-variable/space-grotesk/index.css",
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/global.css",
      ],
      plugins: [
        ionTheme(),
      ],
    }),
  ],
});