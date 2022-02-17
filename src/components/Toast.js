import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToast } from "../redux/Toast/toastAction";
import "./Toast.css";

const Toast = () => {
  const [toastList, setToastList] = useState([]);
  const list = useSelector((state) => state.toastList);
  const dispatch = useDispatch();

  const removeToast = (toastId) => {
    dispatch(deleteToast(toastId));
  };
  useEffect(() => {
    setToastList(list);
    console.log(list);
  }, [list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length > 0) {
        dispatch(deleteToast(list[0].id));
        console.log(list);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, list]);

  return (
    <div className="toast-container">
      {toastList.map((toast, i) => (
        <div
          style={{
            backgroundColor:
              toast.status === "success"
                ? "#EAF7EE"
                : toast.status === "error"
                ? "#FCEDE9"
                : toast.status === "warning"
                ? "#FEF7EA"
                : toast.status === "info"
                ? "#E6EFFA"
                : "",
          }}
          key={i}
          className="toast"
        >
          <div className="toast-box">
            <div
              style={{
                backgroundColor:
                  toast.status === "success"
                    ? "#2FCF6F"
                    : toast.status === "error"
                    ? "#E10000"
                    : toast.status === "warning"
                    ? "#FFB800"
                    : toast.status === "info"
                    ? "#204B90"
                    : "",
              }}
              className="icon-container"
            >
              <span className="toast-icon fas fa-circle-exclamation"></span>
            </div>
            <p className="toast-message">{toast.description}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="btn close-btn"
          >
            <span className="close-icon fas fa-close"></span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
