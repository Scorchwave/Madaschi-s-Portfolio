import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "../education/EducationComponent.css";

class HobbiesComponent extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="education-main">
        <Header theme={theme} />

        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  {hobbies.title}
                </h1>

                <h3
                  className="heading-sub-text"
                  style={{ color: theme.secondaryText }}
                >
                  {hobbies.subtitle}
                </h3>
              </div>
            </div>
          </Fade>

          <div style={{ marginTop: "40px" }}>
            {hobbies.items.map((hobby, index) => (
              <Fade bottom duration={1500} distance="20px" key={index}>
                <div
                  style={{
                    backgroundColor: theme.body,
                    border: `1px solid ${theme.imageHighlight}`,
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "20px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <h2 style={{ color: theme.text, marginBottom: "10px" }}>
                    {hobby.title}
                  </h2>
                  <p style={{ color: theme.secondaryText, margin: 0 }}>
                    {hobby.description}
                  </p>
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

export default HobbiesComponent;
