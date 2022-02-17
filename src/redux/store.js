import { createStore } from "redux";
import toastReducer from "./Toast/toastReducer";

const store = createStore(toastReducer);
export default store;