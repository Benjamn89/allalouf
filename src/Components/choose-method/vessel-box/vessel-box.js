import React, { Component } from "react";
import "./vessel-box.css";

class VesselBox extends Component {
  shouldComponentUpdate(nS, nP) {
    if (nS.vesselName !== this.props.vesselName) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("Vesel box RENDER!!!");
    return (
      <div className="vessel-box-div">
        <h1 className="vessel-box-title">{this.props.vesselName}</h1>
        <p className="vessel-box-res-p">פקידה אחרונה</p>
        <p className="vessel-box-res-p">סוכן מתפעל</p>
        <p className="vessel-box-res-p next-call-p">פקידה הבאה</p>
      </div>
    );
  }
}

export default VesselBox;
