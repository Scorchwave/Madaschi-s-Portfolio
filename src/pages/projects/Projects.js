import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { caseStudiesHeader, caseStudies } from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <Header theme={theme} />
        <div className="main" id="projects">
          <div className="project-header">
            <Fade bottom duration={1000} distance="20px">
              <h1 style={{ color: theme.text }}>{caseStudiesHeader.title}</h1>
              <p style={{ color: theme.secondaryText }}>
                {caseStudiesHeader.description}
              </p>
            </Fade>
          </div>

          <div className="repo-cards-div-main">
            {caseStudies.data.map((study) => (
              <Fade bottom duration={1000} distance="20px" key={study.id}>
                <div
                  style={{
                    backgroundColor: theme.body,
                    border: `1px solid ${theme.imageHighlight}`,
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <h2 style={{ color: theme.text }}>{study.title}</h2>
                  <h4 style={{ color: theme.secondaryText }}>
                    {study.subtitle}
                  </h4>
                  <p style={{ color: theme.secondaryText }}>
                    {study.description}
                  </p>

                  <p style={{ color: theme.text }}>
                    <strong>Tools:</strong> {study.tools.join(", ")}
                  </p>

                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text, fontWeight: "bold" }}
                    >
                      Apri case study
                    </a>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
