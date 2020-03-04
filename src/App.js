import React from "react";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="app-content__container">
      <header className="app-header__title">Hello! 🙈 I'm Moe.</header>
      <div className="app-header__description">
        Welcome to my personal website.
      </div>

      <section className="about-me">
        <div className="h1">About Me</div>
        <div className="body">I do cool things some times.</div>
      </section>
    </div>
  );
}

export default App;
