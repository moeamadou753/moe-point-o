import React, {useState} from "react";
import Project from "./Project";

const Projects = () => {
  const [hovering, setHover] = useState(false);

  let projectRefs = [React.createRef(), React.createRef(), React.createRef()]
  
  const onHoverOn = (projectRefs) => {
    for (let i = 0; i < projectRefs.length; i++) {
        projectRefs[i].current.style.animationPlayState= 'paused';
    }
  }

  const onHoverOff = (projectRefs) => {
    for (let i = 0; i < projectRefs.length; i++) {
        projectRefs[i].current.style.animationPlayState= 'running';
    }
  }

  return (
    <div className="projects__container" >
      <Project 
      onMouseEnter={() => onHoverOn(projectRefs)} 
      onMouseLeave={() => onHoverOff(projectRefs)} 
      hover={hovering}
      projectRef={projectRefs[0]} 
      index={0} 
      total={3} />
      <Project 
      onMouseEnter={() => onHoverOn(projectRefs)} 
      onMouseLeave={() => onHoverOff(projectRefs)} 
      hover={hovering}
      projectRef={projectRefs[1]}  
      index={1} 
      total={3} />
      <Project 
      onMouseEnter={() => onHoverOn(projectRefs)} 
      onMouseLeave={() => onHoverOff(projectRefs)} 
      hover={hovering} 
      projectRef={projectRefs[2]} 
      index={2} 
      total={3} />
    </div>
  );
}

export default Projects;