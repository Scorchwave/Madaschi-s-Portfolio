import React from "react";
import { Redirect } from "react-router-dom";

class Splash extends React.Component {
  render() {
    return <Redirect to="/home" />;
  }
}

export default Splash;
