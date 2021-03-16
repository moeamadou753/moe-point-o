import React from 'react';
import styled, { keyframes } from 'styled-components';


// Need to interpolate positions along sphere to start based on how many circles there are
// Goal:
// - Arrange points on sphere such that we get n equivalent angles
// Rough work:
// - Size and height of rectangle in circle is 20vmin
// - r = 10vmin as border-radius truncates rather than adding additional area
// - Where is the centre of the larger circle? (45%, 45%)
// - Will need to set the keyframe angles
const Project = (props) => {
    let {hover, index, total} = props;

    const oscillation = keyframes`
    from {
        transform: rotate(${360*index/total}deg) translate(30vmin) rotate(${360*index/total}deg);
      }
      to {
        transform: rotate(${360*index/total + 360}deg) translate(30vmin) rotate(${360*index/total - 360}deg);
      }
    `;
    
    const Outline = styled('div').attrs({
        className: `project--thumbnail__container ${hover ? 'pause' : ''}`
    })`
        position: absolute;
        top: 45%;
        left: 45%;
        width: 20vmin;
        height: 20vmin;
        border-radius: 50%;
        background-color: white;
        animation: ${oscillation} infinite linear 10s;
    `;

    return <Outline>
      a{props.hover}b{props.index}c{props.total}
    </Outline>;
}

export default Project;