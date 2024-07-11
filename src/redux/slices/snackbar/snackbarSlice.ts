import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState {
  open: boolean;
  message: string;
  type?: "success" | "error";
}

const initialState: SnackbarState = {
  open: false,
  message: "",
  type: "error",
};
interface SnackbarPayload {
  message: string;
  type: "success" | "error";
}
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.open = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
