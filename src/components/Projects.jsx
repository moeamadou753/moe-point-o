import React, {useState} from "react";
import Project from "./Project";

const Projects = () => {
  const [hovering, setHover] = useState(false);

  return (
    <div className="projects__container">
      <Project 
      onClick={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      hover={hovering} 
      index={0} 
      total={3} />
      <Project 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      hover={hovering} 
      index={1} 
      total={3} />
      <Project 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      hover={hovering} 
      index={2} 
      total={3} />
    </div>
  );
}

export default Projects;