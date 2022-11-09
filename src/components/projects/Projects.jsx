import React from "react";
import projectsData from "./projectData";
import "./Projects.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__head">My Projects</h1>
      <div className="projects__projectsWrapper">
        {projectsData.map((data) => (
          <div className="project__card">
            <div className="project__cardHead">
              <a href={data.siteLink} target="_blank" rel="noreferrer">
                <FolderOutlinedIcon className="project__file" />
              </a>{" "}
              <a href={data.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="project__github" />
              </a>
            </div>
            <div className="project__cardbody">
              <h3 className="project__cardbodyHead">{data.name}</h3>
              <p className="project__cardbody">{data.desc}</p>
            </div>
            <div className="project__cardFooter">
              {data.tag.map((single) => (
                <p>{single}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
