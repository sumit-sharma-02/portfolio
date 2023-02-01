import React, { Fragment } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./SoftwareSkill.css";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo, index) => {
            return (
              <Fragment key={logo.skillName}>
                <TooltipWrapper tooltipId={logo.skillName.trim() + index}>
                  <li className="software-skill-inline" name={logo.skillName}>
                    <span
                      className={`iconify`}
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </li>
                </TooltipWrapper>
                <Tooltip
                  id={logo.skillName.trim() + index}
                  content={logo.skillName}
                  style={{ fontSize: "16px" }}
                  variant={props.theme.name === "dark" ? "light" : "dark"}
                />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
