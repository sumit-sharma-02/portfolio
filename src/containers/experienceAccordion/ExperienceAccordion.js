import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion>
          {props.sections.map((section, index) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"] + "-" + index}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={"experience-" + index}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
