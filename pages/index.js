import React from "react";
import App from "../src/App";
import "../src/scss/main.scss";
import IndexHead from "./heads/index";

export default function Index() {
  return (
    <div className="app">
      <IndexHead />
      <App />
    </div>
  );
}
