import { z } from "zod";
import { branchSchema } from "./branch";
import { itemSchema } from "./item";

export const branchItemSchema = z.object({
  id: z.number().int().positive(),
  branch: branchSchema.pick({ id: true, title: true }),
  item: itemSchema.pick({ id: true, title: true }),
  quantity: z.number().int().nonnegative(),
  reorder_point: z.number().int().nonnegative(),
  unit_of_measure: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
export type TBranchItem = z.infer<typeof branchItemSchema>;

export const createBranchItemSchema = branchItemSchema.omit({ id: true, createdAt: true, updatedAt: true, branch: true, item: true });
export type TCreateBranchItem = z.infer<typeof createBranchItemSchema>;

export const updateBranchItemSchema = createBranchItemSchema.partial();
export type TUpdateBranchItem = z.infer<typeof updateBranchItemSchema>;
