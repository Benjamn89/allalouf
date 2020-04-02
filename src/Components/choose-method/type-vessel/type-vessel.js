import React, { Component } from "react";
import Select from "react-select";
import vesselNames from "../vessels";
import "./type-vessel.css";

class TypeVes extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    var vesselsMap = vesselNames.map(el => {
      return { value: el, label: el };
    });
    console.log("TypeVes - RENDER!!!");
    return (
      <div className="wrap-react-select-div">
        <button
          type="button"
          onClick={this.props.btnClick}
          className="submit-select-btn"
        >
          מצא
        </button>
        <Select className="actual-select" options={vesselsMap} />
      </div>
    );
  }
}

export default TypeVes;
