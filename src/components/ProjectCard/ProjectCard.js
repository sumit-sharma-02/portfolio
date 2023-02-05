import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";
import { style } from "glamor";
import "./ProjectCard.css";

export default function ProjectCard({ repo, theme }) {
  const openLiveApp = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  const openGitHubRepo = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          className="project-card-div"
          style={{ backgroundColor: theme.themeColor }}
        >
          <div className="project-card-overlay"></div>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} theme={theme} />
          </div>
          <div className="repo-path-links">
            {repo.url && (
              <div
                className="repo-live-btn"
                onClick={() => openLiveApp(repo.url)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 30 28"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-monitor"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span>Live</span>
              </div>
            )}

            {repo.repoUrl && (
              <div
                className="repo-github-btn"
                onClick={() => openGitHubRepo(repo.repoUrl)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 30 28"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
