import { z } from "zod";

export const itemSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
export type TItem = z.infer<typeof itemSchema>;

export const createItemSchema = itemSchema.omit({ id: true, createdAt: true, updatedAt: true });
export type TCreateItem = z.infer<typeof createItemSchema>;

export const updateItemSchema = createItemSchema.partial();
export type TUpdateItem = z.infer<typeof updateItemSchema>;
