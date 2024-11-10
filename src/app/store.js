import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import modalSlice from "../features/modalSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
  },
});
