import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import remarkGemoji from "remark-gemoji";
import rehypeTargetBlank from "./src/plugins/rehype-target-blank.js";
import remarkGlossaryDirective from "./src/plugins/remark-glossary-directive.js";
import icon from "astro-icon";

export default defineConfig({
  site: "https://how-to-git.netlify.app/",
  markdown: {
    remarkPlugins: [remarkGemoji, remarkGlossaryDirective],
    rehypePlugins: [rehypeTargetBlank],
  },
  integrations: [
    starlight({
      title: "How To Git",
      description: "A guide to Git",
      plugins: [starlightThemeFlexoki()],
      sidebar: [
        {
          label: "Documentation",
          autogenerate: { directory: "documentation" },
        },
        {
          label: "Glossary",
          link: "/glossary",
        },
      ],
      customCss: ["./src/styles/glossary.css"],
    }),
    icon(),
  ],
});
