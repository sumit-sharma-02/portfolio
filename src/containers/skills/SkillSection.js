import React from "react";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import "./Skills.css";
// import DesignImg from "./DesignImg";

import myImage from "../../assets/images/clients1.png";


function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={"skills-" + index} className="skills-main-div">
               { /* <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade> */ }

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill theme={theme} logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div style={{ textAlign: "center" }}>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={"skill-sentence-" + index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                        
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div key={"skills-" + index} className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <div></div>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                </Fade>
                <Fade left duration={2000}>
                  <div style={{ textAlign: "center" }}>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={"skill-sentence-" + index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                <img src={myImage} alt="Skill" width="100" height="100" />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
