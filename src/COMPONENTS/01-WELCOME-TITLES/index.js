import React, { Component } from "react";
import "./index.css";
class WelcomeTitles extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="welcome-title-div">
        <h1 className="welcome-title-h1">בדיקת צפי - ALLALOUF</h1>
        <div className="welcome-inside-div">
          <button onClick={this.props.clickMode} className="typeMode">
            הקלד שם אניה
          </button>
          <button onClick={this.props.clickMode} className="clickMode">
            בחר אוניה מרשימה
          </button>
        </div>
      </div>
    );
  }
}
export default WelcomeTitles;
