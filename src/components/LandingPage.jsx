import React from "react";
import portrait from "../assets/pics/montreal-1.jpg";

export default function LandingPage() {
  return (
    <section className="landing">
      <span className="left-glowing-orb" />
      <span className="right-glowing-orb" />
      <div className="greeting">
        <div className="greeting__left">
          <img src={portrait} className="greeting__pic" />
        </div>
        <div className="greeting__right">
          <div className="greeting__title">
            Moe <br /> Amadou
          </div>
          <div className="greeting__body">
            <span
              style={{
                color: "#FFD600",
                fontWeight: "bold",
              }}
            >
              Thank you
            </span>{" "}
            for stopping by. Please take a look around to find out more about my
            work, what inspires me, and my goals — I look forward to connecting
            with you soon.
          </div>
        </div>
      </div>
    </section>
  );
}
