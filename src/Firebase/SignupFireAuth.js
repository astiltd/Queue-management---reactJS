import {firebase} from "./initial"
function signupp(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        console.log("succeed")
        alert("succeed")
        // setSignupErrorMessage("Signin Succeed "+email+" "+pass);
    }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage)
        console.log(errorCode,errorMessage)
      });
}
export {signupp}