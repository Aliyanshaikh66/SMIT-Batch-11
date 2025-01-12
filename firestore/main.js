import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { collection, addDoc, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDJuleBFwMYvvK4fpDu-Y1SpRcvO0D8Qvw",
    authDomain: "test-31b59.firebaseapp.com",
    projectId: "test-31b59",
    storageBucket: "test-31b59.firebasestorage.app",
    messagingSenderId: "855523655626",
    appId: "1:855523655626:web:3fd52f524b984f1e0d1933",
    measurementId: "G-7VD9M0YHX1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

//   console.log("user-->", db);

// async function why use 
// try catch user all types error catch etc ...
async function addNumberToDB() {
    try {
        const docRef = await addDoc(collection(db, "numbers"), {
            number: Math.floor(Math.random() * 100) + 1
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

    