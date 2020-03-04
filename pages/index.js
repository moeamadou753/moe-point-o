import React from "react";
import App from "../src/App";
import IndexHead from "./heads/index";
import "../src/scss/main.scss";

export default function Index() {
  return (
    <div>
      <IndexHead />
      <App />
    </div>
  );
}
