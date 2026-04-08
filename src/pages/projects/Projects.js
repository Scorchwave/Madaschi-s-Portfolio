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
      <div className="projects-main">
        <Header theme={theme} />

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {caseStudiesHeader.title}
                </h1>

                <p
                  className="projects-header-detail-text"
                  style={{ color: theme.secondaryText }}
                >
                  {caseStudiesHeader.description}
                </p>
              </div>
            </div>
          </Fade>

          <div className="repo-cards-div-main">
            {caseStudies.data.map((study) => (
              <Fade bottom duration={1500} distance="20px" key={study.id}>
                <div
                  style={{
                    backgroundColor: theme.body,
                    border: `1px solid ${theme.imageHighlight}`,
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "24px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                    flex: "1 1 350px",
                    textAlign: "left",
                  }}
                >
                  <h2 style={{ color: theme.text, marginBottom: "10px" }}>
                    {study.title}
                  </h2>

                  <h4
                    style={{
                      color: theme.secondaryText,
                      marginTop: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {study.subtitle}
                  </h4>

                  <p
                    style={{
                      color: theme.secondaryText,
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    }}
                  >
                    {study.description}
                  </p>

                  <p style={{ color: theme.text, marginBottom: "16px" }}>
                    <strong>Tools:</strong> {study.tools.join(", ")}
                  </p>

                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme.text,
                        fontWeight: "bold",
                        textDecoration: "none",
                        border: `1px solid ${theme.imageHighlight}`,
                        padding: "10px 16px",
                        borderRadius: "8px",
                        display: "inline-block",
                      }}
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
