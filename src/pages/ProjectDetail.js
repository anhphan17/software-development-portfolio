import React from 'react';
import { useParams, Link} from 'react-router-dom';
import projects from "../data/projects";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#001f49" }}>{project.title}</h1>
        <p style={{ fontStyle: "italic" }}>{project.description}</p>
        <p><strong>Tech Stack:</strong> {project.tech}</p>
        <p><strong>Date:</strong> {project.date}</p>
        <p style={{ marginTop: "15px", whiteSpace: "pre-line" }}>{project.details}</p>
        <Link to="/projects">
            <button
                style={{
                    marginTop: "20px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    backgroundColor: "#001f49",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Back to Projects                
            </button>
        </Link>    
    </div>
    );
}

export default ProjectDetail;