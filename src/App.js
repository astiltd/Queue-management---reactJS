import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./Components/Sign/SignIn";
import Signup from "./Components/Sign/SignUp";
import Main from "./Components/main";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App main-container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Smart Queue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/signin">Signin</Nav.Link>
              <Nav.Link href="/">SignUp</Nav.Link>
              <Nav.Link href="/landing">Landing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Signin/> */}

        <Router>
          <div>
            <Route exact path="/" component={signup} />
            <Route path="/signin" component={signin} />
            <Route path="/landing" component={Main} />

            {/* <Route path="/allVisitors" component={allVisitors} />
            <Route path="/employees" component={employees} />
            <Route path="/guards" component={guards} />
            <Route path="/noticeBoard" component={noticeBoard} /> */}
          </div>
        </Router>
      </div>
    );
  }
}
const signup = () => <Signup />;

const signin = () => <Signin />;

export default App;
