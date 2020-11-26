import React, { useState } from "react";

import "./dialog.scss";

const Dialog = ({ title, contents, confirm, abort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const toggleDialogWindow = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDialogWindow = (e) => {
    const name = e.target.name;
    setIsOpen(false);
    if (name === "confirm") {
      confirm();
      setStatus("confirmed");
    } else if (name === "abort") {
      abort();
      setStatus("aborted");
    }
  };

  return (
    <>
      <button onClick={toggleDialogWindow}>Open Dialog</button>

      {status && (
        <p className="info">
          User has{" "}
          <span className={status === "aborted" ? "abort" : "confirm"}>
            {status}
          </span>{" "}
          the Dialog Window.
        </p>
      )}

      <div className={`warning ${isOpen ? "" : "closed"}`}>
        <h2 className="warning__title">{title}</h2>
        <p className="warning__text">{contents}</p>
        <div className="buttonContainer">
          <button
            onClick={closeDialogWindow}
            name="confirm"
            className="warning__button warning__button--confirm"
          >
            Confirm
          </button>
          <button
            onClick={closeDialogWindow}
            name="abort"
            className="warning__button warning__button--abort"
          >
            Abort
          </button>
        </div>
      </div>
    </>
  );
};

export default Dialog;
