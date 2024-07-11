"use client";

import { POPPINS } from "@/config/constants/fonts";
import { COLORS } from "@/utils/colors";
import { PriorityEnum } from "@/utils/enum";
import {
  getBackgroundColorByPriority,
  getTextColorByPriority,
} from "@/utils/helpers";
import { styled, Card, Typography, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const StyledTaskCardRoot = styled(Card)(() => ({
  minHeight: 400,
  width: 300,
  margin: "10px 0 !important",
  borderRadius: 10,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const StyledCardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: 90,
  width: 266,
  backgroundColor: COLORS.CARD_BACKGROUND,
  gap: 8,
  padding: 8,
  borderRadius: 8,
  border: `1px solid ${COLORS.GREY}`,
}));
export const StyledTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: 12,
  colors: COLORS.BLACK,
  fontFamily: POPPINS.style.fontFamily,
}));

export const StyledStatusTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: 16,
  color: COLORS.BLACK,
  display: "flex",
  justifyContent: "flex-start",
}));
interface PriorityProps {
  priority: string;
}
export const StyledPriority = styled(Typography)(
  ({ priority }: PriorityProps) => ({
    display: "flex",
    fontWeight: 400,
    fontSize: 10,
    width: "fit-content",
    alignItems: "center",
    borderRadius: 20,
    padding: "4px 8px 4px 8px",
    backgroundColor: getBackgroundColorByPriority(priority as PriorityEnum),
    color: getTextColorByPriority(priority as PriorityEnum),
  })
);

export const StyledDate = styled(Typography)(() => ({
  fontWeight: 400,
  color: COLORS.GREY,
  fontSize: 11,
}));

export const StyledAddButton = styled(Button)(() => ({
  backgroundColor: COLORS.CARD_BACKGROUND,
  color: COLORS.BLACK,
  width: 266,
  border: `1px solid ${COLORS.GREY}`,
  borderRadius: 8,
  "&:hover": {
    backgroundColor: COLORS.GREY,
  },
  fontSize: 12,
  fontWeight: 500,
  display: "flex",
  justifyContent: "flex-start",
}));

export const StyledDeleteOutlineOutlinedIcon = styled(
  DeleteOutlineOutlinedIcon
)(() => ({
  width: 20,
}));
