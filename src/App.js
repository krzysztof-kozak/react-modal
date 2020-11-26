import React from "react";

import { Dialog } from "./components";
import "./styles.css";

export default function App() {
  const handleConfirm = () => console.log("User has confirmed the dialog");
  const handleAbort = () => console.log("User has aborted the dialog");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Dialog
        title="Attention!"
        contents="This is a warning text..."
        confirm={handleConfirm}
        abort={handleAbort}
      />
    </div>
  );
}
