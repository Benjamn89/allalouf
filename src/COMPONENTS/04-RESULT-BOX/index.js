import React, { Component } from "react";
import "./index.css";
class ResultBox extends Component {
  shouldComponentUpdate(nP, nS) {
    if (nP.vesselName !== this.props.vesselName) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="result-box-div">
        <h1 className="result-h1">{this.props.vesselName}</h1>
        <div className="result-inside-div">
          <p className="inside-p">צפי הגעה</p>
          <span className="in-sp-block">{this.props.eta}</span>
          <p className="inside-p add-mar-bot">פקידה קודמת</p>
          <div className="test">
            <span className="last-call-title">הגעה</span>
            <span className="last-call-subtitle">{this.props.lastArrived}</span>
          </div>
          <div className="test">
            <span className="last-call-title">תחילת עבודה</span>
            <span className="last-call-subtitle">{this.props.lastStarted}</span>
          </div>
          <div className="test">
            <span className="last-call-title">הפלגה</span>
            <span className="last-call-subtitle">{this.props.lastSailed}</span>
          </div>
          <div className="test">
            <span className="last-call-title">סוכן מתפעל</span>
            <span className="last-call-subtitle">
              {this.props.lastAgent} {this.props.lastAgentLast}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultBox;
