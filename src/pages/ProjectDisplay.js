import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">

            <img src={project.image} alt="" />
            <h1> {project.name}</h1>
            <p>
                <b>Language:</b> {project.skills}
            </p>
            <p>
                <b> Tech stack :</b> {project.stack}
            </p>
            <h2 className="description">
                {project.about}
            </h2>

            <a href={project.link} rel="noopener noreferrer" target="_blank">
                <LinkIcon />
            </a>

            <a href={project.github} rel="noopener noreferrer" target="_blank">
                <GitHubIcon />
            </a>


        </div>
    );
}

export default ProjectDisplay;