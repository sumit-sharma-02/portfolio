import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/";
import "./Project.css";

export default function Projects() {
  const [repo, _] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <ProjectCard repo={v} key={"project-card-" + i} />;
        })}
      </div>
      <a className="resume-btn" href="https://github.com/sumit-sharma-02/">
        More Projects (Github)
      </a>
    </div>
  );
}
