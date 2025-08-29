import React from "react";

function Contact() {
    return (
        <section className="contact" 
            style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem"
            }}
        >
            <h1 style={{ color: "#001f49" }}>Contact Me</h1>

            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    maxWidth: "400px",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "1rem",
                    backgroundColor: "#ffffff"
                }}
            >
            
            <p style={{ textAlign: "center"}}><strong>Email: </strong><a href="mailto:anhnguyenphan03@gmail.com">anhnguyenphan03@gmail.com</a></p>
            </div>

            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    maxWidth: "400px",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "1rem",
                    backgroundColor: "#ffffff"
                }}
            >
            <p style={{ textAlign: "center"}}><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/anhphan17/">linkedin.com/in/anhphan17/</a></p>
            </div>
            
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    maxWidth: "400px",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "1rem",
                    backgroundColor: "#ffffff"
                }}
            >
            <p style={{ textAlign: "center"}}><strong>GitHub: </strong><a href="https://github.com/anhphan17">github.com/anhphan17</a></p>
            </div>
            
        </section>
        
    );
}

export default Contact;