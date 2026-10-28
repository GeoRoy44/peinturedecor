import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    motCle: z.string(),
    idPlan: z.string(),
    niveau: z.enum(['fille', 'soeur']),
    parent: z.string().optional(),
    date: z.coerce.date(),
    maj: z.coerce.date().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles };
