import React from "react";
import "./scss/main.scss";

function App() {
  return (
    <div className="app-content__container">
      <section className="landing">
        <div className="landing__greeting-card">
          <div className="app-header__title">Hello! 🙈 I'm Moe.</div>
          <div className="app-header__subtitle">Thanks for stopping by.</div>
          <div className="app-header__description">
            Take a look around and feel free to connect with me.
          </div>
        </div>
      </section>

      <section className="about-me">
        <div className="h2">About Me</div>
        <div className="about-me__description">
          I am a double degree student in Computer Science and Business at the
          University of Waterloo in Ontario, Canada. I’ve previously done
          internships at TD Bank as an Android Developer and at Accenture as a
          general Software Engineer. I am currently looking for Fall 2020
          (September - December) internship opportunities. Please check out some
          of my links and work on this website and leave me a message to connect
          and discuss opportunities or one of my passions.
        </div>
      </section>
    </div>
  );
}

export default App;
