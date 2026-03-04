import { defineCollection, z } from 'astro:content';

// ─── Colección existente: artículos (sin cambios) ─────────────────────────────
const articulosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    pilar: z.enum(['pm', 'fintech', 'ia']),
    extracto: z.string(),
    imagen: z.string().optional(),
    lectura: z.number(),
    destacado: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

// ─── Nueva colección: labs ────────────────────────────────────────────────────
const labsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),             // subtítulo corto (para cards)
    category: z.enum(['ia', 'fintech', 'pm']),
    status: z.enum(['live', 'wip', 'idea']),
    startDate: z.date(),
    updatedDate: z.date().optional(),
    techStack: z.array(z.string()),       // ["Python", "OpenAI API", ...]
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    metrics: z.array(                     // para la grid de números
      z.object({
        value: z.string(),               // "47", "3h", "82%"
        label: z.string(),
      })
    ).optional(),
    relatedArticle: z.string().optional(), // slug del artículo relacionado
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articulos: articulosCollection,
  labs: labsCollection,
};
