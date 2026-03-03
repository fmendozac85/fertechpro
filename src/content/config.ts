import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    pilar: z.enum(['pm', 'fintech', 'ia']),
    extracto: z.string(),
    imagen: z.string().optional(),
    lectura: z.number(),
    destacado: z.boolean().optional().default(false),
  }),
});

export const collections = { articulos };
