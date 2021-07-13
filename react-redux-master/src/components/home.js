import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter, getUserData } from "../actions/index";
import { firebase } from "./Firebase";
import _ from "lodash";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.props.increaseCounter(this.props.counter);
    var db = firebase.firestore().collection("users");
    this.props.getUserData(db);
  }

  componentDidMount() {
    //if i want to load data right after rendering
    var db = firebase.firestore().collection("users");
    this.props.getUserData(db);
  }

  componentWillReceiveProps(nextProps) {
    console.log("inside next props ", nextProps);
    this.setState({
      users: nextProps.userData,
      getUserData: nextProps.getUserData
    });
  }

  renderUserDatas() {
    var list_length = Object.keys(this.props.userData).length;

    console.log("list of length is ", list_length);
    if (list_length > 0) {
      return _.map(this.props.userData, singleUser => {
        return (
          <li
            className="list-group-item search-list-item"
            key={singleUser.phone}
          >
            {singleUser.name}
          </li>
        );
      });
    } else {
      return (
        <li className="list-group-item search-list-item">
          No result found ....
        </li>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <ul>{this.renderUserDatas()}</ul>
        <button onClick={this.onClickButton}>Counter</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increaseCounter, getUserData }, dispatch);
}

function mapStateToProps({ counter, userData, loginData}) {
  console.log("found data back from rootreducer ", counter);
  return { counter, userData, loginData};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
