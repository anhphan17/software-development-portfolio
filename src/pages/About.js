import React from "react";

function About() {
    return (
        <div className="about-page" style={{ padding: "2rem" }}>
            <h2>About Me</h2>
            <p>
                I'm a software developer with experience in Java, React, and mobile development. <br />
                I enjoy building interactive applications that solve real-world problems.
            </p>

            <h2>Education</h2>
            <p>Georgia State University - J. Mack Robinson College of Business <br />
                Bachelor's of Business Administration in Computer Information Systems
            </p>

            <h2>Skills</h2>
            <ul>
                <li>Java / Object-Oriented Programming</li>
                <li>React / React Native</li>
                <li>Swift / iOS Development</li>
                <li>FlutterFLow / Cross-Platform apps</li>
                <li>Database: MySQL, SQLite</li>
            </ul>
        </div>

    );
}

export default About;