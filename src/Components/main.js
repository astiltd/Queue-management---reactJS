import React, { Component } from "react";
import { firebase } from "../Firebase/initial";
var uid;
var val;
export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: this.getInstitutionData()
    };
    this.getInstitutionData = this.getInstitutionData.bind(this);
    // this.change = this.change.bind(this);
  }
  componentDidMount() {
    val = this.getInstitutionData();
  }
  // change() {
  //   console.log("this ");
  //   this.setState({
  //     ...this.state,
  //     running: val
  //   });
  // }

  async getInstitutionData() {
    await firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        uid = user.uid;
        firebase
          .database()
          .ref("Org/" + uid)
          .once("value")
          .then(function(snapshot) {
            val = snapshot.val().runningSerial;
            console.log(snapshot.val().runningSerial);
            return val;
          });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <input placeholder={this.state.running} />
        <button>Next</button>
      </div>
    );
  }
}
