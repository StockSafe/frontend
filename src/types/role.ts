import { z } from "zod";

export const roleSchema = z.enum(["admin", "manager"]);
export type TRole = z.infer<typeof roleSchema>;
