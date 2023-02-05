import React from "react";
import { Fade } from "react-reveal";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="experience-card-col experience-card-gap">
        <div
          className="experience-card experience-card-1"
          style={{ backgroundColor: "#0078bd" }}
        >
          <div className="experience-company-logo">
            <img
              src={require(`../../assets/images/${experience.logo_path}`)}
              className="featured-image"
              alt={experience.alt_name}
            />
          </div>
          <article
            className="experience-card-body"
            style={{
              backgroundColor: theme.themeColor,
              color: theme.oppositeThemeColor,
            }}
          >
            <header>
              <div className="title">
                <h3>{experience.title}</h3>
              </div>
              <p className="meta">
                <span className="pre-heading">{experience.company}</span>
                <br />
                <span className="author">{experience.duration}</span>
              </p>
              <ol
                className="experience-card-description"
                dangerouslySetInnerHTML={{
                  __html: experience.description,
                }}
              ></ol>
            </header>
          </article>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
