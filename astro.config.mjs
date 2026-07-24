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
      favicon: "/favicon.ico",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/empa-scientific-it/how-to-git" },
        { icon: "seti:info", label: "Website", href: "https://scientificit.empa.ch/" },
      ],
      logo: {
        src: "./src/assets/Logo_Cubeonly_Empa.svg",
        alt: "Empa Scientific IT Logo",
      },
      customCss: [
        "./src/styles/glossary.css",
        "./src/styles/customColors.css",
        "./src/styles/customStyles.css",
      ],
      sidebar: [
        { slug: "" },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tutorial",
          autogenerate: { directory: "tutorial" },
        },
        {
          label: "Glossary",
          link: "/glossary",
        },
        {
          label: "References",
          link: "/references",
        },
      ],
    }),
    icon(),
  ],
});
