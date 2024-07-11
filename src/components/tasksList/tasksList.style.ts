"use client";

import { COLORS } from "@/utils/colors";

import { styled, Card, Typography, Button } from "@mui/material";

export const StyledTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: 12,
  colors: COLORS.BLACK,
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
