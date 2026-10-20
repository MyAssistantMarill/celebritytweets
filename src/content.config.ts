import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.enum(['Feuds', 'Shade', 'Drama', 'Collabs', 'Apologies']),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
