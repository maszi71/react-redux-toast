import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastList: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toastList = [...state.toastList, action.payload];
    },
    deleteToast: (state, action) => {
      const toastIndex = state.toastList.findIndex(
        (item) => item.id === action.payload
      );
      state.toastList.splice(toastIndex, 1);
    },
  },
});

export const { addToast, deleteToast } = toastSlice.actions;
export default toastSlice.reducer;
