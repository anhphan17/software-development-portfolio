import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ color: "#001f49" }}>My Projects</h1>
            <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px"                
            }}
            >
                {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj}></ProjectCard>
                ))}
            </div>
        </div>
    );
}

export default Projects;