import React from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a final-year Computer Programming and Data Analysis student at <span className="college-name">George Brown College</span>,
              who genuinely enjoys building things and figuring out how they work.
              I like taking ideas from “what if?” to something real, whether that’s a web app, an API, or a data project that actually tells a story.
            </p>
            <p>
              I’ve worked across full-stack development using Java, C#, JavaScript, ASP.NET Core, and Node.js, and I’ve explored data analysis and machine learning
               with Python, pandas, and scikit-learn.
              I’m comfortable moving between frontend, backend, databases, testing, and deployment, 
              and I enjoy learning whatever the project needs next.
            </p>
            <p>
              Outside of code, I bring strong communication and people skills from customer-facing roles,
              which helps me think about software from a user’s point of view, not just a technical one.
              I’m curious by nature, not afraid to ask questions, and motivated by building reliable, 
              well-designed software that people actually enjoy using.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>Full-Stack Developer</h4>
              <p>From backend logic to clean UIs</p>
            </div>
            <div className="highlight-item">
              <h4>Data & ML Curious</h4>
              <p>Turning data into insights</p>
            </div>
            <div className="highlight-item">
              <h4>Cloud & DevOps Ready</h4>
              <p>Deploying, testing, improving</p>
            </div>
            <div className="highlight-item">
              <h4>Always Learning</h4>
              <p>Curious, adaptable, and hands-on</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
