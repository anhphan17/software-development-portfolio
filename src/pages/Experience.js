import React from "react";
import Card from "../components/Card";
import experiences from "../data/experiences";

function Experience() {
    return (
        <div style={{padding: "20px"}}>
            <h1 style={{color: "#001f49"}}>My Experience</h1>
            <div 
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px"
            }}
            >
                {experiences.map((exper) => (
                    <Card key={exper.id} experience={exper}></Card>
                ))}
            </div>
        </div>
    );
}

export default Experience;