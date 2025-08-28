import React from "react";
import { useParams, Link } from "react-router-dom";
import experiences from "../data/experiences";

function ExperienceDetail() {
    const { id } = useParams();
    const experience = experiences.find((e) => e.id === parseInt(id));

    if (!experience) {
        return <h2>Experience Not Found</h2>
    }

    return (
        <div style={{padding: "20px"}}>
            <h1 style={{color: "001f49", textAlign: "center"}}>{experience.title}</h1>
            <p style={{ textAlign: "center"}}><strong><i>{experience.company} ({experience.date})</i></strong></p>
            
            <h3>Role Overview</h3>
            <p>{experience.details}</p>

            <h3>Key Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
            ))}
            </ul>

            <h3>Impact / Achievements</h3>
            <ul className="list-disc list-inside space-y-2">
            {experience.impact.map((impacts, index) => (
                <li key={index}>{impacts}</li>
            ))}
            </ul>

            {experience.presentationLink && (
                <h3>
                    <a
                        href={experience.presentationLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "001f49", textDecoration: "underline"}}
                    >
                        View Project Presentation
                    </a>
                </h3>
            )}

            <Link to="/experience">
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
                    Back to Experience
                </button>
            </Link>
        </div>
    );
}

export default ExperienceDetail;