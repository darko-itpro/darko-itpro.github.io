import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title:       z.string(),
  description: z.string(),
  docsUrl:     z.string().url(),
  order:       z.number().int().default(99),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/en' }),
  schema: projectSchema,
});

const projectsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/fr' }),
  schema: projectSchema,
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

const trainingSchema = z.object({
  title:       z.string(),
  description: z.string(),
  topic:       z.string(),
  docsUrl:     z.string().url(),
  order:       z.number().int().default(99),
});

const trainings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainings/en' }),
  schema: trainingSchema,
});

const trainingsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainings/fr' }),
  schema: trainingSchema,
});

export const collections = {
  'projects-en': projects,
  'projects-fr': projectsFr,
  'blog-en': blog,
  'blog-fr': blogFr,
  'trainings-en': trainings,
  'trainings-fr': trainingsFr,
};
