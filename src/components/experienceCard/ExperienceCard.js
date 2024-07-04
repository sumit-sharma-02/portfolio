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
          style={{ backgroundColor: experience.color }}
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
              <a
                href={experience.company_url}
                target="_blank"
                className="button_companypath">
                VER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 30 28"
                  fill="none"
                  stroke="000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-monitor"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>

              </a>
            </header>
          </article>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
