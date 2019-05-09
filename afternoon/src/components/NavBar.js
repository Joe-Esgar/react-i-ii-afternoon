import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navBar">
        <button onClick={this.props.prev}>Previous</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default NavBar;
