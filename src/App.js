import React from "react";
import "./scss/main.scss";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-content__container">
          <LandingPage />
          <div className="sr-oscillation rectangle" />
          {/* <section className="about-me">
            <div className="h2"> About Me </div>
            <div className="about-me__description">
              I am a double degree student in Computer Science and Business at
              the University of Waterloo in Ontario, Canada.I’ ve previously
              done internships at TD Bank as an Android Developer and at
              Accenture as a general Software Engineer.I am currently looking
              for Fall 2020(September - December) internship
              opportunities.Please check out some of my links and work on this
              website and leave me a message to connect and discuss
              opportunities or one of my passions.
            </div>
          </section> */}
          <Projects />
        </div>
        <NavigationBar />
      </React.Fragment>
    );
  }
}

export default App;
