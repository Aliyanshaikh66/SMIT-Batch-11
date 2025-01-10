import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJuleBFwMYvvK4fpDu-Y1SpRcvO0D8Qvw",
    authDomain: "test-31b59.firebaseapp.com",
    projectId: "test-31b59",
    storageBucket: "test-31b59.firebasestorage.app",
    messagingSenderId: "855523655626",
    appId: "1:855523655626:web:3fd52f524b984f1e0d1933",
    measurementId: "G-7VD9M0YHX1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider(); //constructor function

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("user-->", user); // console
    
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error-->:", errorMessage); // console error message
   
  });

});