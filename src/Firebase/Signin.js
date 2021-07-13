import {firebase} from "./initial"
function signInn(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        console.log("succeed")
        alert("succeed")
        // setSignupErrorMessage("Signin Succeed "+email+" "+pass);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage)
        console.log("failed")
      });
      
}
export {signInn}