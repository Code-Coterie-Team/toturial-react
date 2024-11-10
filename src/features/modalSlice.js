import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showPriceModal: false,
  },
  reducers: {
    setShowPriceModal: (state, action) => {
      state.showPriceModal = action.payload;
    },
  },
});

export const { setShowPriceModal } = modalSlice.actions;

export default modalSlice.reducer;
