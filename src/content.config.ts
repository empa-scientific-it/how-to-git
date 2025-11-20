import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const glossarySchema = z.object({
  term: z.string(),
  definition: z.string(),
  aliases: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  glossary: defineCollection({
    loader: glob({
      base: './src/content/glossary',
      pattern: '**/*.{md,mdx}',
    }),
    schema: glossarySchema,
  }),
};