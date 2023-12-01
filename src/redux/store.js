import { configureStore } from '@reduxjs/toolkit'
import toastReducer from "./toastReducer";

const store = configureStore({
    reducer: {
        toast: toastReducer,
      },
});
export default store;