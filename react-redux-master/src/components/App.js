import React, { Component } from "react";
import "../App.css";
import Home from "./home";
import LoginPage from "./login";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
