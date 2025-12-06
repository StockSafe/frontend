import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().positive(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export type TUser = z.infer<typeof userSchema>;

export const createUserSchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true });
export type TCreateUser = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();
export type TUpdateUser = z.infer<typeof updateUserSchema>;
