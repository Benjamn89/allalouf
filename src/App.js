import "./App.css";
import WelcomeTitles from "./COMPONENTS/01-WELCOME-TITLES/index";
import TypeMode from "./COMPONENTS/03-TYPE-MODE/index";
import ClickMode from "./COMPONENTS/02-CLICK-MODE/index";
import ResultBox from "./COMPONENTS/04-RESULT-BOX/index";
import Spinner from "./COMPONENTS/05-SPINNER/index";
import React, { Component } from "react";
import { connect } from "react-redux";
import actionTypes from "./REDUCERS/actionTypes/actionTypes";
import jump from "jump.js";

class App extends Component {
  shouldComponentUpdate(nS, nP) {
    if (nS.vesselName !== this.props.vesselName) {
      // scroll to the box result for smart phone users
      jump(".powered-p");
    }
    return true;
  }

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

  enterPressed = (e, vessel) => {
    if (e.keyCode === 13 && vessel) {
      // load spinner
      this.props.loadSpinner();
      this.props.pickVessel(vessel);
    }
  };

  render() {
    var clickedMethod, showBox;
    if (this.props.viewMode) {
      if (this.props.viewMode === "typeMode") {
        clickedMethod = (
          <TypeMode
            enterPressed={(e, vessel) => this.enterPressed(e, vessel)}
            fetchBtn={(e) => this.fetching(e)}
          />
        );
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

        <div className="testdb-div"></div>
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
