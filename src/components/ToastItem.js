import "./ToastItem.css";

const ToastItem = ({ toast, removeToast }) => {
  const statusColors = {
    success: "#EAF7EE",
    error: "#FCEDE9",
    warning: "#FEF7EA",
    info: "#E6EFFA",
  };

  const iconColors = {
    success: "#2FCF6F",
    error: "#E10000",
    warning: "#FFB800",
    info: "#204B90",
  };

  return (
    <div
      style={{
        backgroundColor: statusColors[toast.status] || "",
      }}
      className="toast"
    >
      <div className="toast-box">
        <div
          style={{
            backgroundColor: iconColors[toast.status] || "",
          }}
          className="icon-container"
        >
          <span className="toast-icon fas fa-circle-exclamation"></span>
        </div>
        <p className="toast-message">{toast.description}</p>
      </div>
      <button onClick={() => removeToast(toast.id)} className="btn close-btn">
        <span className="close-icon fas fa-close"></span>
      </button>
    </div>
  );
};

export default ToastItem;