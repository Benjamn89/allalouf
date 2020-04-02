import React, { Component } from "react";
import "./choose-met.css";
import ClickOptions from "./click-options/click-options";
import TypeVes from "./type-vessel/type-vessel";
import VesselBox from "./vessel-box/vessel-box";

class ChooseM extends Component {
  state = {
    choosen: null,
    chooseVessel: null,
    vesselName: null
  };

  vesselClicked = e => {
    if (e.target.type) {
      // save the vesesl name on the type mode
      var vessel =
        e.target.parentNode.children[1].children[0].children[0].children[0]
          .innerHTML;
      if (vessel === "Select...") {
        // if the client not pick vessel on type mode
        vessel = false;
      }
    } else {
      // save the var on the click mode
      var vessel = e.target.innerHTML;
    }

    var copyState = { ...this.state };
    copyState.vesselName = vessel;
    this.setState({ vesselName: copyState.vesselName });
  };

  chooseOption = e => {
    var copyState = { ...this.state };
    if (e.target.className === "type-vessel-p") {
      copyState.choosen = <ClickOptions clickOnVessel={this.vesselClicked} />;
      this.setState({ choosen: copyState.choosen });
    } else {
      copyState.choosen = <TypeVes btnClick={this.vesselClicked} />;
      this.setState({ choosen: copyState.choosen });
    }
  };

  render() {
    console.log("ChooseM - RENDER!!!");
    return (
      <div className="wrap-my-choosen">
        <div className="choose-m-div">
          <p onClick={this.chooseOption} className="type-vessel-p">
            הקלד שם אניה
          </p>
          <p onClick={this.chooseOption} className="choose-from-p">
            בחר אוניה מרשימה
          </p>
        </div>
        {this.state.choosen}
        <VesselBox vesselName={this.state.vesselName} />
      </div>
    );
  }
}

export default ChooseM;
