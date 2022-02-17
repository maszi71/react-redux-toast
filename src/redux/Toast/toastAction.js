import { ADD_TOAST, DELETE_TOAST } from "./toastActionType";

export const addToast = (toastItem) => {
  return {
    type: ADD_TOAST,
    payload: toastItem,
  };
};

export const deleteToast = (toastId) => {
  return {
    type: DELETE_TOAST,
    payload: toastId,
  };
};