import React, { Component } from "react";

class InfoContainer extends Component {
  render() {
    return (
      <div className="infoContainer">
        <div className="subHeader" />
        <div className="work">
          <div className="counter">{this.props.index}/24</div>
          <h2>
            Name: {this.props.data.name.first + " " + this.props.data.name.last}
          </h2>

          <h3>From: {this.props.data.city + ", " + this.props.data.country}</h3>
          <h3>Title: {this.props.data.title}</h3>
          <h3>
            Favorite Movies:
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
