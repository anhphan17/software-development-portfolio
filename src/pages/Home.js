import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page" style={{ padding: "2rem", textAlign: "center" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hi, I'm Anh Phan!</h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
                I'm a software developer passionate about building apps that make a difference. 
                From Java and React to Swift and mobile development, I focus on creating clean, engaging, and functional applications that solve real-world challenges.
            </p>

            <div>
                <Link to="/projects">
                    <button style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}>
                    View Projects
                    </button>
                </Link>
                <Link to="/contact">
                    <button style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}>
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;