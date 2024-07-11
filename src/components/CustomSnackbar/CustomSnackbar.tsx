"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Alert, Snackbar } from "@mui/material";
import { hideSnackbar } from "@/redux/slices/snackbar/snackbarSlice";

const CustomSnackbar = () => {
  const { open, message, type } = useAppSelector(
    (state: RootState) => state.snackbar
  );
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(hideSnackbar());
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
