import { ADD_TOAST, DELETE_TOAST } from "./toastActionType";

const initialState = {
  toastList: [],
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toastList: [...state.toastList, action.payload],
      };
    case DELETE_TOAST:
      const toastArr = state.toastList;
      const toastIndex = toastArr.findIndex(
        (item) => item.id === action.payload
      );
      toastArr.splice(toastIndex, 1);
      return {
        ...state,
        toastList: [...toastArr],
      };

    default:
      return state;
  }
};

export default toastReducer;