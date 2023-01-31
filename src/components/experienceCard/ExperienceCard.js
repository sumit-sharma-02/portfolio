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
    // <div
    //   className="experience-card"
    //   style={{
    //     border: `1px solid ${experience["color"]}`,
    //     backgroundColor: theme.imageDark,
    //   }}
    // >
    //   <div className="experience-card-logo-div">
    //     <img
    //       className="experience-card-logo"
    //       src={require(`../../assets/images/${experience["logo_path"]}`)}
    //       alt=""
    //     />
    //   </div>
    //   <div className="experience-experience-card-body-div">
    //     <div className="experience-card-header-div">
    //       <div className="experience-card-heading-left">
    //         <h3 className="experience-card-title" style={{ color: theme.text }}>
    //           {experience["title"]}
    //         </h3>
    //         <p
    //           className="experience-card-company"
    //           style={{ color: theme.secondaryText }}
    //         >
    //           <a
    //             href={experience["company_url"]}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             {experience["company"]}
    //           </a>
    //         </p>
    //       </div>
    //       <div className="experience-card-heading-right">
    //         <p
    //           className="experience-card-duration"
    //           style={{ color: theme.secondaryText }}
    //         >
    //           {experience["duration"]}
    //         </p>
    //         <p
    //           className="experience-card-location"
    //           style={{ color: theme.secondaryText }}
    //         >
    //           {experience["location"]}
    //         </p>
    //       </div>
    //     </div>
    //     <p
    //       className="experience-card-description"
    //       style={{ color: theme.text }}
    //     >
    //       {experience["description"]}
    //     </p>
    //   </div>
    // </div>
  );
}

export default ExperienceCard;
