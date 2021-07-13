import React, { Component } from "react";
import { connect } from "net";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class LoginPage extends Component {
  render() {
    return <div />;
  }
}

function mapStateToProps({}) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
