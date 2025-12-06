import { z } from "zod";
import { roleSchema } from "./role";
import { businessSchema } from "./business";
import { userSchema } from "./user";

export const businessUserSchema = z.object({
  id: z.number().int().positive(),
  business: businessSchema.pick({ id: true, title: true }),
  user: userSchema.pick({ id: true, firstName: true, lastName: true, email: true }),
  role: roleSchema,
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});
export type TBusinessUser = z.infer<typeof businessUserSchema>;

export const createBusinessUserSchema = businessUserSchema.omit({ id: true, createdAt: true, updatedAt: true, business: true, user: true }).extend({
  businessId: z.number().int().positive(),
  userId: z.number().int().positive(),
});
export type TCreateBusinessUser = z.infer<typeof createBusinessUserSchema>;

export const updateBusinessUserSchema = createBusinessUserSchema.partial();
export type TUpdateBusinessUser = z.infer<typeof updateBusinessUserSchema>;
