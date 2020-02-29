import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          url={
            "https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg"
          }
        />
      </div>
    );
  }
}

export default App;
