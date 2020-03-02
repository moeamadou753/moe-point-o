import React from "react";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="app-content__container">
      <header className="app-header__title">Hello! 🙈 I'm Moe.</header>
      <div className="app-header__description">
        Welcome to my personal website.
      </div>
    </div>
  );
}

export default withRouter(App);
