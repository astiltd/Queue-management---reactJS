import React, { Component } from 'react'
import "./Signup.css"
import {Form,Button} from "react-bootstrap"
// import FormGroupp from "../Components/FormGroup/FormGroup"
import {signupp} from "../../Firebase/SignupFireAuth"
export default class SignUp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"",
           email:"",
           pass:""
        }
        this.onInputChangeName = this.onInputChangeName.bind(this)
        this.onInputChangeEmail = this.onInputChangeEmail.bind(this)
        this.onInputChangePass = this.onInputChangePass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      onInputChangeName(e) {
        this.setState({
          name: e.target.value
        });
        // console.log(this.state.name," name")
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
      handleSubmit(e){
        
        e.preventDefault();
        signupp(this.state.email,this.state.pass)
        console.log(this.state)
      }
      
  render() {
    return (
        <div className="container signup-container">
       <form>
              <input id="orgName" onChange={this.onInputChangeName} label="Organization Name" type="txt" placeholder="Enter Organization Name"/>
              <input id="orgEmail" onChange={this.onInputChangeEmail} label="Organization Email" type="txt" placeholder="Enter Organization Email"/>
              <input id="orgPass" onChange={this.onInputChangePass} label="Password" type="password" placeholder="Enter Password"/>
              <button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
   </div>
    )
  }
}
