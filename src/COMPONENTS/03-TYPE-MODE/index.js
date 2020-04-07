import React, { Component } from "react";
import "./index.css";
import Select from "react-select";
import vessels from "../../VESSELS/vessels-array";

var options = vessels.map((el) => {
  return {
    value: el,
    label: el,
  };
});

var choosenVessel = false;

class TypeMode extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleChange = (e) => {
    choosenVessel = e.value;
  };

  passClickProps = () => {
    if (choosenVessel) {
      this.props.fetchBtn(choosenVessel);
    }
  };

  render() {
    return (
      <div className="type-mode-div">
        <button onClick={this.passClickProps} className="type-mode-btn">
          מצא
        </button>
        <Select
          autoFocus
          onKeyDown={(e) => {
            this.props.enterPressed(e, choosenVessel);
            choosenVessel = "";
          }}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
export default TypeMode;
