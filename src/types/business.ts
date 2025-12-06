import { z } from "zod";

export const businessSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export type TBusiness = z.infer<typeof businessSchema>;

export const createBusinessSchema = businessSchema.omit({ id: true, createdAt: true, updatedAt: true });
export type TCreateBusiness = z.infer<typeof createBusinessSchema>;

export const updateBusinessSchema = createBusinessSchema.partial();
export type TUpdateBusiness = z.infer<typeof updateBusinessSchema>;
