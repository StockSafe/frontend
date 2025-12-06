import { z } from "zod";
import { businessSchema } from "./business";

export const branchSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  business: businessSchema.pick({ id: true, title: true }),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
export type TBranch = z.infer<typeof branchSchema>;

export const createBranchSchema = branchSchema.omit({ id: true, createdAt: true, updatedAt: true, business: true }).extend({
  businessId: z.number().int().positive(),
});
export type TCreateBranch = z.infer<typeof createBranchSchema>;

export const updateBranchSchema = createBranchSchema.partial();
export type TUpdateBranch = z.infer<typeof updateBranchSchema>;
