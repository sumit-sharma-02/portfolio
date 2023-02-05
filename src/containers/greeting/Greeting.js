import React from "react";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import { useNavigate } from "react-router-dom";
// import { style } from "glamor";
import Typewriter from "typewriter-effect";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import FeelingProud from "./FeelingProud";
import WaveHand from "../../assets/images/waving-hand.png";
import "./Greeting.css";

export default function Greeting(props) {
  const theme = props.theme;
  // const navigate = useNavigate();

  // const styles = style({
  //   backgroundColor: `${theme.accentBright}`,
  //   ":hover": {
  //     boxShadow: `0 5px 15px ${theme.accentBright}`,
  //   },
  // });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-container">
              <h1 className="greeting-text">
                {greeting.title}
                <img
                  className="greeting-hand-wave"
                  src={WaveHand}
                  alt="waving-hand"
                />
                ,{greeting.title2}
              </h1>
              <div
                className="greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span className="greeting-text-static">I'm a </span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle1}</span>`
                      )
                      .pauseFor(300)
                      .deleteChars(21)
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle2}</span>`
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>
              <SocialMedia page="home" />
              {/* <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
