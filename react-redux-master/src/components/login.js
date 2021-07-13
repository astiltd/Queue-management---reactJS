import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isValidUser } from "../actions/action_login";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onInputChangePassword = this.onInputChangePassword.bind(this);
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
  }

  onSubmitClick(e) {
    e.preventDefault();
    console.log("on Submit clicked!!!", e.target.value);
  }

  onInputChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
    console.log("inside component", e.target.value);
    this.props.isValidUser(e.target.value);
  }

  onInputChangePassword(e) {
    const len = e.target.value.length;
    if (len < 6) {
      //show error
    }
    this.props.isValidUser(e.target.value);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.loginData === "Y") {
      console.log("login succesful");
    } else {
      console.log("login not succesful");
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.onInputChangeEmail}
            value={this.state.email}
          />
          <input
            type="text"
            onChange={this.onInputChangePassword}
            value={this.state.email}
          />
          <input type="submit" onClick={this.onSubmitClick} value="submit" />
        </form>
      </div>
    );
  }
}

//receieving point
function mapStateToProps({ loginData, userData, counter}) {
  console.log("inside component ", userData, counter);
  return { loginData, userData, counter };
}

//outgoing point
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ isValidUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
