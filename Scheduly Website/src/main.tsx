import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// If you have a global css file, keep this. If it errors, remove it.
import "./app/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
