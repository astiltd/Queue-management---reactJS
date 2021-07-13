var firebase = require("firebase");

require("firebase/auth");
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  databaseURL: "https://nsuslideshare.firebaseio.com",
  projectId: "nsuslideshare",
  storageBucket: "nsuslideshare.appspot.com",
  messagingSenderId: "603965086262"
};

firebase.initializeApp(config);

export { firebase };
