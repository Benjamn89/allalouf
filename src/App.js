import "./App.css";
import WelcomeTitles from "./COMPONENTS/01-WELCOME-TITLES/index";
import TypeMode from "./COMPONENTS/03-TYPE-MODE/index";
import ClickMode from "./COMPONENTS/02-CLICK-MODE/index";
import ResultBox from "./COMPONENTS/04-RESULT-BOX/index";
import Spinner from "./COMPONENTS/05-SPINNER/index";
import React, { Component } from "react";
import { connect } from "react-redux";
import actionTypes from "./REDUCERS/actionTypes/actionTypes";

class App extends Component {
  changeMoge = (e) => {
    var mode = e.target.className;
    this.props.changeMoge(mode);
  };

  fetching = (e) => {
    // load spinner
    this.props.loadSpinner();

    // start fetching data
    if (typeof e === "string") {
      if (e === "Last UFS (out of line)") {
        this.props.pickVessel("Lila Athens");
      } else {
        this.props.pickVessel(e);
      }
    } else {
      if (e.target.innerHTML === "Last UFS (out of line)") {
        this.props.pickVessel("Lila Athens");
      } else {
        this.props.pickVessel(e.target.innerHTML);
      }
    }
  };

  render() {
    var clickedMethod, showBox;
    if (this.props.viewMode) {
      if (this.props.viewMode === "typeMode") {
        clickedMethod = <TypeMode fetchBtn={(e, b) => this.fetching(e, b)} />;
      } else {
        clickedMethod = <ClickMode fetching={this.fetching} />;
      }
    }
    if (this.props.showSpinner) {
      showBox = <Spinner />;
    }

    if (this.props.showBox) {
      showBox = (
        <ResultBox
          eta={this.props.eta}
          lastArrived={this.props.lastArrived}
          lastStarted={this.props.lastStarted}
          lastSailed={this.props.lastSailed}
          lastAgent={this.props.lastAgent}
          lastAgentLast={this.props.lastAgentLast}
          vesselName={this.props.vesselName}
        />
      );
    }

    return (
      <div className="App">
        <WelcomeTitles clickMode={this.changeMoge} />
        {clickedMethod}
        {showBox}
        <p className="powered-p">Powered By Binyamin Tal</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewMode: state.displaySearchMethod.currentViewMethod,
    showBox: state.showTheResBox.showBox,
    vesselName: state.showTheResBox.pickedVessel,
    eta: state.showTheResBox.eta,
    lastArrived: state.showTheResBox.lastArrived,
    lastStarted: state.showTheResBox.lastStarted,
    lastSailed: state.showTheResBox.lastSailed,
    lastAgent: state.showTheResBox.lastAgent,
    lastAgentLast: state.showTheResBox.lastAgentLast,
    showSpinner: state.showTheResBox.showSpinner,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    changeMoge: (mode) => dispacth(actionTypes.typeMode(mode)),
    loadSpinner: () => dispacth(actionTypes.loadSpinner()),
    pickVessel: (vesselName) => dispacth(actionTypes.pickVessel(vesselName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
