import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToast } from "../redux/toastReducer";
import ToastItem from "./ToastItem";
import "./Toast.css";

const Toast = () => {
  const list = useSelector((state) => state.toast.toastList);
  const dispatch = useDispatch();

  const removeToast = (toastId) => {
    dispatch(deleteToast(toastId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length > 0) {
        dispatch(deleteToast(list[0].id));
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, list]);

  return (
    <div className="toast-container">
      {list.map((toast, i) => (
        <ToastItem key={i} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default Toast;