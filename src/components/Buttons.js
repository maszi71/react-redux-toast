import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="card">
      <h1 className="title">React Toast message !</h1>
      <div className="buttons">
        <button className="btn success">Success</button>
        <button className="btn error">Error</button>
      </div>
      <div className="buttons">
        <button className="btn info">Info</button>
        <button className="btn warning">Warning</button>
      </div>
    </div>
  );
};

export default Buttons;
