import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      list: ["pizza", "hot dog", "sushi", "chocolate"]
    };
  }

  handleChange = filter => {
    this.setState({
      filterString: filter.target.value
    });
  };

  render() {
    let foodsToDisplay = this.state.list
      .filter((e, i) => {
        return e.includes(this.state.filterString);
      })
      .map((e, i) => {
        return <h2 key={i}> {e} </h2>;
      });
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} />
        {foodsToDisplay}
      </div>
    );
  }
}
