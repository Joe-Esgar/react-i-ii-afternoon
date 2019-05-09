import React, { Component } from "react";
import "./App.css";
import data from "./data.js";
import InfoContainer from "./components/InfoContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0],
      index: 0
    };
    this.nextHandler = this.nextHandler.bind(this);
    this.prevHandler = this.prevHandler.bind(this);
  }

  nextHandler() {
    console.log("test");
    if (this.state.index === 24) {
      return;
    }
    this.setState({
      data: data[this.state.index],
      index: this.state.index + 1
    });
  }

  prevHandler() {
    if (this.state.index === 0) {
      return;
    }
    this.setState({
      data: data[this.state.index],
      index: this.state.index - 1
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="topper">
          <header>
            <div className="home">Home</div>
          </header>
        </div>
        <div className="bottom">
          <div className="cont">
            <InfoContainer data={this.state.data} index={this.state.index} />{" "}
          </div>{" "}
          <div className="nav">
            <NavBar next={this.nextHandler} prev={this.prevHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
