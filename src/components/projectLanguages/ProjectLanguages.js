import React, { Fragment } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./ProjectLanguages.css";

function ProjectLanguages(props) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {props.logos.map((logo, index) => {
          return (
            <Fragment key={logo.name}>
              <TooltipWrapper tooltipId={logo.name.trim() + index}>
                <li
                  className="software-skill-inline-languages"
                  name={logo.name}
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </TooltipWrapper>
              <Tooltip
                id={logo.name.trim() + index}
                content={logo.name}
                style={{ fontSize: "16px" }}
                variant={props.theme.name === "dark" ? "light" : "dark"}
              />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectLanguages;
