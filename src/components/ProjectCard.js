import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard({ project }) {
    return (
        <div
        className="project-card"
        style={{
            border: "1px solid #ccc",
            borderRadius: "10px", 
            padding: "15px",
            margin: "10px",
            width: "300px",
            backgroundColor: "#f9f9f9"
        }}
        >
            <h2 style={{ color: "#001f49", marginTop: "5px"}}>{project.title}</h2>
            <p style={{ fontStyle: "italic"}}>{project.date}</p>
            <p>{project.summary}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            
            <Link to={`/projects/${project.id}`}>
                <button 
                    style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    backgroundColor: "#001f49",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                    }}
                >
                    Learn More
                </button>
            </Link>
        </div>
    );
}

export default ProjectCard;