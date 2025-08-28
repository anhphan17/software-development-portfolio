import React from "react";

function About() {
    return (
        <div className="about-page" style={{ padding: "2rem" }}>
            <h1 style={{textAlign: "center"}}>About Me</h1>
          
            <p>
                Hi! I'm Anh, a software developer skilled in Java, React, Swift, and mobile development. 
                I build scalable, user-friendly apps across web and mobile platforms, focusing on clean architecture, responsive design, and cloud integration.
                My experience spans full-stack Java applications, native mobile apps, and dynamic web solutions that prioritize performance ad maintainability.
            </p>

            <p>
                I'm currently expanding my expertise by learning Tailwind CSS for modern UI design and working toward the Oracle Certified Professional: Java SE certification. 
                I actively sharpen my problem-solving skills with data structures and algorithms, while refining cross-platform development with React and FlutterFlow.
            </p>

            <h2>Education</h2>
            <p><strong>J. Mack Robinson College of Business, Georgia State University</strong><br/>
            <i>Bachelor's of Business Administration in Computer Information Systems</i>
            </p>

            <h2>Skills</h2>
            <p><strong>Programming Languages: </strong>Java, Swift, JavaScript, Python, SQL, HTML, CSS</p>

            <p><strong>Frameworks & Tools: </strong>React / React Native, FlutterFlow, Tailwind CSS, JDBC, Google Maps API, Git / GitHub
            </p>
            
            <p><strong>Backend / Full-Stack Skills: </strong>Full-Stack Development, Mobile & Cross-Platform Development, Cloud Integration, Responsive Design, 
                Agile Methodologies, OOP, Data Analysis
            </p>

            <h2>What Drives Me</h2>
            <p>
                Beyond coding, I am passionate about leveraging technology to improve access to justice. I believe software can bridge the gap between underserved communities and essential legal resources.
                One project I'm passionate about is an Access to Justice app designed to connect low-income individuals with affordable legal services, provide rights education, and streamline case tracking.
                This approach combines my technical expertise with my commitment to building technology that creates meaningful social impact. 
            </p>
        </div>

    );
}

export default About;