import "./Buttons.css";
import { useDispatch } from "react-redux";
import { addToast } from "../redux/toastReducer";

const Buttons = () => {
  const dispatch = useDispatch();

  const createRandomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const showErrorToast = () => {
    dispatch(
      addToast({
        id: createRandomId(),
        status: "error",
        description: "oops something went wrong!",
      })
    );
  };

  const showSuccessToast = () => {
    dispatch(
      addToast({
        id: createRandomId(),
        status: "success",
        description: "Congratulation! you made it!",
      })
    );
  };

  const showWarningToast = () => {
    dispatch(
      addToast({
        id: createRandomId(),
        status: "warning",
        description: "Be careful dude I warn you:)",
      })
    );
  };

  const showInfoToast = () => {
    dispatch(
      addToast({
        id: createRandomId(),
        status: "info",
        description: "I think you need some Information :)",
      })
    );
  };

  return (
    <div className="card">
      <h1 className="title">React Toast message !</h1>
      <div className="buttons">
        <button onClick={showSuccessToast} className="btn success">
          Success
        </button>
        <button onClick={showErrorToast} className="btn error">
          Error
        </button>
      </div>
      <div className="buttons">
        <button onClick={showInfoToast} className="btn info">
          Info
        </button>
        <button onClick={showWarningToast} className="btn warning">
          Warning
        </button>
      </div>
    </div>
  );
};

export default Buttons;
