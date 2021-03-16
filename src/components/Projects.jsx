import React from "react";
import Project from "./Project";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects__container">
        <Project index={0} total={2} />
        <Project index={1} total={2} />
      </div>
    );
  }
}

export default Projects;