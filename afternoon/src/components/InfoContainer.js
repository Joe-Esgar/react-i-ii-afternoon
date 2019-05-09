import React, { Component } from "react";
import Count from "./Count";

class InfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="infoContainer">
        <div className="subHeader">
          <Count />
        </div>
        <div className="work">
          <h2>
            From: {this.props.data.name.first + " " + this.props.data.name.last}
          </h2>

          <h3>
            Job Title: {this.props.data.city + ", " + this.props.data.country}
          </h3>
          <h3>Employer: {this.props.data.title}</h3>
          <h3>
            Favorite Movies:{" "}
            <ol>
              <li>{this.props.data.favoriteMovies[0]}</li>
              <li>{this.props.data.favoriteMovies[1]}</li>
              <li>{this.props.data.favoriteMovies[2]}</li>
            </ol>
          </h3>
        </div>
      </div>
    );
  }
}

export default InfoContainer;
