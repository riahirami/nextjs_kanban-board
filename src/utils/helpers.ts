import { months } from "@/config/constants/constants";
import { COLORS } from "./colors";
import { PriorityEnum, StatusEnum } from "./enum";

// Get background color based on task priority
export const getBackgroundColorByPriority = (priority: PriorityEnum) => {
  return priority === PriorityEnum.LOW
    ? COLORS.LOW_PRIORITY_BG
    : priority === PriorityEnum.MEDIUM
    ? COLORS.MEDIUM_PRIORITY_BG
    : COLORS.HIGH_PRIORITY_BG;
};

// Get text color based on task priority
export const getTextColorByPriority = (priority: PriorityEnum) => {
  return priority === PriorityEnum.HIGH ? COLORS.WHITE : COLORS.BLACK;
};

// Format the date as "MMM DD, YYYY"
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
}
