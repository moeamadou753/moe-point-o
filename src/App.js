import React from "react";
import NavigationBar from "./components/NavigationBar";
import "./scss/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { landingCardHover: false };
  }

  handleHover = () => {
    this.setState({ landingCardHover: true });
  };

  handleLeave = () => {
    this.setState({ landingCardHover: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-content__container">
          <section className="landing"></section>

          <section className="about-me">
            <div className="h2">About Me</div>
            <div className="about-me__description">
              I am a double degree student in Computer Science and Business at
              the University of Waterloo in Ontario, Canada. I’ve previously
              done internships at TD Bank as an Android Developer and at
              Accenture as a general Software Engineer. I am currently looking
              for Fall 2020 (September - December) internship opportunities.
              Please check out some of my links and work on this website and
              leave me a message to connect and discuss opportunities or one of
              my passions.
            </div>
          </section>
        </div>
        <NavigationBar />
      </React.Fragment>
    );
  }
}

export default App;
