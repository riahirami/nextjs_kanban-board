"use client";

import { INTER } from "@/config/constants/fonts";
import { Typography, styled } from "@mui/material";

export const PageHeadingRoot = styled(Typography)(({ theme }) => ({
  fontSize: "50px",
  fontWeight: "bold",
  fontFamily: INTER.style.fontFamily,
  color: theme.palette.text.primary,
  textAlign: "center",
  wordWrap: "break-word",
  overflowWrap: "break-word",
}));
