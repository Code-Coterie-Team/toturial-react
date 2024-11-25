import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import modalSlice from "../features/modalSlice";
import themeSlice from "../features/themeSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
    theme: themeSlice,
  },
});
