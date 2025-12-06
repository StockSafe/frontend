import type { TUser } from "../types/user";

const adminUser: TUser = {
  id: 1,
  firstName: "Tal",
  lastName: "Mekler",
  email: "tal.mekler11@gmail.com",
  password: "admin123",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default {
  adminUser,
};
