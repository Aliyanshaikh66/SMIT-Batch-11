
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 
 const firebaseConfig = {
   apiKey: "your api key",
   authDomain: "test-app-328c1.firebaseapp.com",
   projectId: "test-app-328c1",
   storageBucket: "test-app-328c1.firebasestorage.app",
   messagingSenderId: "748282555384",
   appId: "1:748282555384:web:b95c94fd2599ea6313440d",
   measurementId: "G-RSF4STWS0T"
 };

 const app = initializeApp(firebaseConfig);

 const auth = getAuth();

 let registeres_btn = document.getElementById("registeres_btn");

 registeres_btn.addEventListener("click", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log("user==>", user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error=>", errorMessage);
    
    // ..
  });

 }); 


 let login_btn = document.getElementById("login_btn");
 login_btn.addEventListener("click", function () {
    let loginemail = document.getElementById("loginemail");
    let loginpassword = document.getElementById("loginpassword");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("user==>", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("error=>", errorMessage);
      });

 });