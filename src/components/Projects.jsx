import React, {useState} from "react";
import Project from "./Project";
import { projects } from "../model/projectCopy";

const Projects = () => {
  console.log(projects.length);
  console.log(projects);

  let projectRefs = []

  for (let i = 0; i < projects.length; i++) {
    projectRefs.push(React.createRef())
  }

  const handleMouseEnter = (projectRefs) => {
    for (let i = 0; i < projectRefs.length; i++) {
        projectRefs[i].current.style.animationPlayState= 'paused';
    }
  }

  const handleMouseLeave = (projectRefs) => {
    for (let i = 0; i < projectRefs.length; i++) {
        projectRefs[i].current.style.animationPlayState= 'running';
    }
  }



  return (
    <div className="projects__container" >
      {projects.map(
        (project) => (
          <Project
            onMouseEnter={() => handleMouseEnter(projectRefs)}
            onMouseLeave={() => handleMouseLeave(projectRefs)}
            projectRef={projectRefs[project.index]}

            index={project.index}
            total={projects.length}
          />
        )
      )}
    </div>
  );
}

export default Projects;