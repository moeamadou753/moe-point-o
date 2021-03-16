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
    let {index, total} = props;

    const oscillation = keyframes`
    from {
        transform: rotate(${360*index/total}deg) translate(30vmin) rotate(${360*index/total}deg);
      }
      to {
        transform: rotate(${360*index/total + 360}deg) translate(30vmin) rotate(${360*index/total - 360}deg);
      }
    `;
    
    const Outline = styled.div`
        position: absolute;
        top: 45%;
        left: 45%;
        width: 20vmin;
        height: 20vmin;
        border-radius: 50%;
        background-color: white;
        animation: ${oscillation} infinite linear 5s;

        &:hover {
            animation-play-state: paused;
        }
    `;  
    
    return <Outline />;
}

export default Project;