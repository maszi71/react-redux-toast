import "./ToastButtons.css";
import { useDispatch } from "react-redux";
import { addToast } from "../redux/toastReducer";
import Button from "./Button";

const ToastButtons = () => {
  const dispatch = useDispatch();

  const toastButtons = [
    { status: "success", label: "Success", className: "btn success" },
    { status: "error", label: "Error", className: "btn error" },
    { status: "info", label: "Info", className: "btn info" },
    { status: "warning", label: "Warning", className: "btn warning" },
  ];

  const createRandomId = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  const showToast = (status, description) => {
    dispatch(
      addToast({
        id: createRandomId(),
        status,
        description,
      })
    );
  };

  return (
    <div className="card">
      <h1 className="title">React Toast message!</h1>
      <div className="buttons">
        {toastButtons.map(({ status, label, className }) => (
          <Button
            key={status}
            onClick={() => showToast(status, `This is a ${status} message!`)}
            className={className}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastButtons;
