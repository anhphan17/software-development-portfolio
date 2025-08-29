import React from "react";
import { Link } from "react-router-dom";
import homePhoto from "../assets/homePhoto.JPG";

function Home() {
    return (
        <div 
            className="home-page" 
            style={{ 
                display: "flex",
                flexWrap: "wrap", 
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem",
                gap: "3rem",
                minHeight: "80vh",
            }}
        >
            <img
                src={homePhoto}
                alt="Anh Phan"
                style={{
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
            />

            <div style={{ maxWidth: "600px", textAlign: "left"}}>
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "001f49" }}>
                    Hi, I'm Anh Phan!
                </h1>
                <h2><i>Software Developer</i></h2>
                <p style={{ fontSize: "1.25rem", marginBottom: "2rem", lineHeight: "1.6" }}>
                I'm a software developer passionate about building apps that make a difference. 
                From Java and React to Swift and mobile development, I focus on creating clean, engaging, and functional applications that solve real-world challenges.
            </p> 

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap"}}>
                <Link to="/projects">
                    <button 
                        style={{ 
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#001f49",
                            color: "#fff",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background-color 0.3s",
                         }}
                         onMouseOver={(e) => (e.target.style.backgroundColor = "#003366")}
                         onMouseOut={(e) => (e.target.style.backgroundColor = "#001f49")}
                    >
                    View Projects
                    </button>
                </Link>
                <Link to="/contact">
                <button 
                        style={{ 
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#001f49",
                            color: "#fff",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background-color 0.3s",
                         }}
                         onMouseOver={(e) => (e.target.style.backgroundColor = "#003366")}
                         onMouseOut={(e) => (e.target.style.backgroundColor = "#001f49")}
                    >
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default Home;