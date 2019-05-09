import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <button onClick={this.props.prev}>Previous</button>
        <button onClick={this.props.delete}>Delete</button>
        <button>New</button>
        <button>Edit</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default NavBar;
