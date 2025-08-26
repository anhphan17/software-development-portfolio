import React from "react";

function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={linksStyle}>
                <a href="https://github.com/anhphan17" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/anhphan17/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: "#222", 
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
};

const linksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "0.5rem",
};

export default Footer;
