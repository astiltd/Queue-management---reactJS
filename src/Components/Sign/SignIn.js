import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Signin.css";
import { signInn } from "../../Firebase/Signin";
export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: ""
    };
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
    this.onInputChangePass = this.onInputChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
    // console.log(this.state.email," email")
  }
  onInputChangePass(e) {
    this.setState({
      pass: e.target.value
    });
    // console.log(this.state.pass, " pass")
  }
  handleSubmit(e) {
    e.preventDefault();
    signInn(this.state.email, this.state.pass);
    console.log(this.state);
  }
  render() {
    return (
      <div className="container signin-container">
        <form>
          <input
            id="orgEmail"
            onChange={this.onInputChangeEmail}
            label="Organization Email"
            type="txt"
            placeholder="Enter Organization Email"
          />
          <input
            id="orgPass"
            onChange={this.onInputChangePass}
            label="Password"
            type="password"
            placeholder="Enter Password"
          />
          <button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
