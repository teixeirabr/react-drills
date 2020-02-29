import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      message: e.target.value
    });
  }

  render() {
    console.log(this.state.message);
    return (
      <div className="App">
        <p>App-1</p>
        <p>
          Create a basic react app where you type in a text box and it shows up
          as text on the DOM.
        </p>
        <input type="text" onChange={e => this.handleChange(e)} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default App;
