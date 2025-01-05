import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "your api",
  authDomain: "smit-de250.firebaseapp.com",
  projectId: "smit-de250",
  storageBucket: "smit-de250.firebasestorage.app",
  messagingSenderId: "795454057541",
  appId: "1:795454057541:web:97a07ae91361a3bebd872c",
  measurementId: "G-ZM0QWXTE63"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString(); 
    // 6-digit OTP
}
let otp; 

document.getElementById("sendOtpEmail_btn").addEventListener("click", () => {
    const email = document.getElementById("emailForOtp").value;
    const otp1 = document.getElementById("otp");
    otp = generateOtp();
    console.log(`Generated OTP  ${otp}`);
    otp1.innerHTML= otp;
});


document.getElementById("verifyOtpEmail_btn").addEventListener("click", () => {
    const enteredOtp = Array.from(document.querySelectorAll('.otp-box'))
                            .map(input => input.value)
                            .join('');
    if (enteredOtp === otp) {
        console.log('OTP verified successfully!');
        alert('OTP verified successfully!');
    } else {
        console.error('Invalid OTP');
        alert('Invalid OTP');
    }
});
