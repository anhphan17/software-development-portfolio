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
        <h1 style={{ color: "#001f49", textAlign: "center" }}>{project.title}</h1>
        <p style={{ fontStyle: "italic", textAlign: "center"}}>{project.date}</p>
        

        <p><strong>Tech Stack:</strong> {project.tech}</p>

        <p><strong>Description:</strong></p>
        <p>{project.detailsDescription}</p>
        <p><strong>Key Features:</strong></p>
        <ul className="list-disc list-inside space-y-2">
            {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>

        <p><strong>Impact:</strong></p>
        <p>{project.outcome}</p>

        <h3><a href={project.link} target="blank" rel="noopener noreferrer"><strong>View Project</strong></a></h3>

        

        

        
        
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