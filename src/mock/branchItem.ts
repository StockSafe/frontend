import type { TBranchItem } from "../types/branchItem";

const branchItem1: TBranchItem = {
  id: 1,
  branch: { id: 1, title: "Main Branch" },
  item: { id: 1, title: "Coffee beans" },
  quantity: 100,
  reorder_point: 20,
  unit_of_measure: "Kg",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const branchItem2: TBranchItem = {
  id: 1,
  branch: { id: 1, title: "Main Branch" },
  item: { id: 2, title: "Cups" },
  quantity: 1000,
  reorder_point: 100,
  unit_of_measure: "units",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default {
  branchItem1,
  branchItem2,
};
