import React from "react";
import { Link } from "react-router-dom";

function Card({experience}) {
    return (
        <div className="experience-card" 
        style={{
            border: "1px solid #ccc",
            borderRadius: "10px", 
            padding: "15px",
            margin: "10px",
            width: "300px",
            backgroundColor: "#f9f9f9"
        }}
        >
            <h2 style={{color: "#001f49", marginTop: "5px"}}>{experience.title}</h2>
            <p><strong>Company: </strong>{experience.company}</p>
            <p><strong>Date: </strong>{experience.date}</p>
            <p>{experience.details}</p>
            <Link to={`/experience/${experience.id}`}>
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
                        My Role
                </button>
            </Link>
        </div>
    );
}

export default Card;