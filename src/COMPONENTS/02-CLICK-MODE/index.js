import React, { Component } from "react";
import vessels from "../../VESSELS/vessels-array";
import "./index.css";

class ClickMode extends Component {
  shouldComponentUpdate() {
    return false;
  }

  list = vessels.map((el) => {
    return (
      <li onClick={this.props.fetching} className="li-list" key={el}>
        {el}
      </li>
    );
  });

  render() {
    return (
      <div className="click-mode-div">
        <ul className="vessels-list-ul">{this.list}</ul>
      </div>
    );
  }
}
export default ClickMode;
