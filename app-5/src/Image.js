import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img width="500px" src={this.props.url} />
        <div>Rio de Janeiro</div>
      </div>
    );
  }
}
