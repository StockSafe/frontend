import { z } from "zod";
import { branchSchema } from "./branch";

export const itemSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().nullish(),
  branch: branchSchema.pick({ id: true, title: true }),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
export type TItem = z.infer<typeof itemSchema>;

export const createItemSchema = itemSchema.omit({ id: true, createdAt: true, updatedAt: true, branch: true }).extend({
  branchId: z.number().int().positive(),
});
export type TCreateItem = z.infer<typeof createItemSchema>;

export const updateItemSchema = createItemSchema.partial();
export type TUpdateItem = z.infer<typeof updateItemSchema>;
