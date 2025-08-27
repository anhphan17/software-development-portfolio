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
            <h1 style={{color: "001f49"}}>{experience.title}</h1>
            <p><strong>Company: </strong>{experience.company}</p>
            <p><strong>Date: </strong>{experience.date}</p>
            <p>{experience.details}</p>

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