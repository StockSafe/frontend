import type { TItem } from "../types/item";

const item1: TItem = {
  id: 1,
  title: "Coffee beans",
  description: "A classic Italian coffee drink made with espresso and steamed milk.",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const item2: TItem = {
  id: 1,
  title: "Cups",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default {
  item1,
  item2,
};
