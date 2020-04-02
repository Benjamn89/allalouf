import React, { Component } from "react";
import vesselName from "../vessels";

import "./click-options.css";

class ClickOptions extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("ClickOptions - RENDER!!!");
    return (
      <div className="options-box-div">
        {vesselName.map(el => {
          return (
            <div
              onClick={this.props.clickOnVessel}
              key={el}
              className="single-option"
            >
              {el}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClickOptions;
