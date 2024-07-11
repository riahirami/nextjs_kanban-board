import { StatusEnum } from "@/utils/enum";

// Define months array for displaying month names
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const statusLabels = {
  [StatusEnum.TODO]: "Todo",
  [StatusEnum.IN_PROGRESS]: "In Progress",
  [StatusEnum.DONE]: "Completed",
};
