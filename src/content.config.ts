import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    docsUrl:     z.string().url(),
    order:       z.number().int().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    tags:        z.array(z.string()).default([]),
  }),
});

const blogFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/fr' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    tags:        z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects,
  'blog-en': blog,
  'blog-fr': blogFr,
};
