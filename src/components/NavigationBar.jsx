import React from "react";
import Link from "next/link";
import SVG from "react-inlinesvg";
import github from "../assets/icons/Github.svg";
import linkedin from "../assets/icons/LinkedIn.svg";
import devpost from "../assets/icons/Devpost.svg";
import twitter from "../assets/icons/Twitter.svg";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resumeVer = "September-19";

    return (
      <div className="nav-bar">
        <Link href="https://www.github.com/moeamadou753" replace>
          <a className="nav-bar__icon" target="_blank">
            <SVG src={github} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mohamed-amadou" replace>
          <a className="nav-bar__icon" target="_blank">
            <SVG src={linkedin} />
          </a>
        </Link>
        <Link href="https://www.devpost.com/MohamedAmadou" replace>
          <a className="nav-bar__icon" target="_blank">
            <SVG src={devpost} />
          </a>
        </Link>
        <Link href="https://www.twitter.com/Amadou159Amadou" replace>
          <a className="nav-bar__icon" target="_blank">
            <SVG src={twitter} />
          </a>
        </Link>
        <Link href="/" replace>
          <a className="nav-bar__text">ABOUT ME</a>
        </Link>
        <Link href={`/resumes/${resumeVer}.pdf`} replace>
          <a className="nav-bar__text" target="_blank">
            RESUME
          </a>
        </Link>
        <Link href="/" replace>
          <a className="nav-bar__text">PROJECT SYMPHONIA</a>
        </Link>
        <Link href="/" replace>
          <a className="nav-bar__text-outline">
            <div className="nav-bar__text">CONTACT ME</div>
          </a>
        </Link>
      </div>
    );
  }
}

export default NavigationBar;
