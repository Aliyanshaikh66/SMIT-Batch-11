// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getAuth, 
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     sendSignInLinkToEmail,
// } 
// from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// signInWithEmailAndPassword

// const firebaseConfig = {
//   apiKey: "api",
//   authDomain: "smit-de250.firebaseapp.com",
//   projectId: "smit-de250",
//   storageBucket: "smit-de250.firebasestorage.app",
//   messagingSenderId: "795454057541",
//   appId: "1:795454057541:web:97a07ae91361a3bebd872c",
//   measurementId: "G-ZM0QWXTE63"
// };

// const app = initializeApp(firebaseConfig);
//  const auth = getAuth();
//  let registeres_btn = document.getElementById("registeres_btn");
//  registeres_btn.addEventListener("click", function () {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     console.log("user==>", user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error=>", errorMessage);  
//    // ..
//   });
//  }); 

// // Sign In

// let login_btn = document.getElementById("login_btn");
// login_btn.addEventListener("click", function () {
//     let loginemail = document.getElementById("loginemail");
//     let loginpassword = document.getElementById("loginpassword");
// signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     console.log("user=>", user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error=>", errorMessage);
//   });
// });

// // email authentication

// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     registeres_btn.addEventListener("click", function () {
//       let email = document.getElementById("email");
//       let password = document.getElementById("password");
//     window.localStorage.setItem('emailForSignIn', email);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });
//  });

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, 
    createUserWithEmailAndPassword,
    sendEmailVerification,
    GoogleAuthProvider,
    getRedirectResult
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "your api",
  authDomain: "smit-de250.firebaseapp.com",
  projectId: "smit-de250",
  storageBucket: "smit-de250.appspot.com", // Correct storage bucket URL
  messagingSenderId: "795454057541",
  appId: "1:795454057541:web:97a07ae91361a3bebd872c",
  measurementId: "G-ZM0QWXTE63"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Register new user
let register_btn = document.getElementById("registeres_btn"); // Verify this ID
register_btn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Send email verification
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("Email verification sent!");
        })
        .catch((error) => {
            console.error("Error sending email verification:", error.message);
        });
    })
    .catch((error) => {
        console.error("Error signing up:", error.message);
    });
});

// Handle Google login redirection
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("User info:", user);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error during Google login:", errorMessage);
  });



















// Sign in existing user
// let login_btn = document.getElementById("login_btn");
// login_btn.addEventListener("click", function () {
//     let loginemail = document.getElementById("loginemail").value;
//     let loginpassword = document.getElementById("loginpassword").value;

//     signInWithEmailAndPassword(auth, loginemail, loginpassword)
//     .then((userCredential) => {
//         // User signed in successfully
//         const user = userCredential.user;
//         console.log("User signed in:", user);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Error signing in:", errorMessage);
//     });
// });

// Email authentication: Send sign-in link
// let actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     //  must be in the authorized domains list in the Firebase Console.
//     url: 'https://www.example.com/finishSignUp?cartId=1234',
//     handleCodeInApp: true,
// };

// let sendSignInLink_btn = document.getElementById("sendSignInLink_btn");
// sendSignInLink_btn.addEventListener("click", function () {
//     let email = document.getElementById("email").value;

//     sendSignInLinkToEmail(auth, email, actionCodeSettings)
//     .then(() => {
//         // The link was successfully sent. Inform the user and save the email in localStorage
//         window.localStorage.setItem('emailForSignIn', email);
//         console.log("Email link sent to", email);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Error sending email link:", errorMessage);
//     });
// });





