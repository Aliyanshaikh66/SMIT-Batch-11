// Dummy localStorage to store users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Show signup section
function showSignup() {
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("signup-section").style.display = "block";
}

// Show login section
function showLogin() {
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("auth-section").style.display = "block";
}

// Signup function
function signup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  // Check if user already exists
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert("User already exists!");
    return;
  }

  // Add user to users array and save to localStorage
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please login.");
  showLogin();
}

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    alert("All fields are required!");
    return;
  }

  // Check if user exists and password matches
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    alert("Invalid email or password!");
    return;
  }

  // Login successful
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("home-section").style.display = "block";
  document.getElementById("user-name").innerText = user.name;
}

// Logout function
function logout() {
  document.getElementById("home-section").style.display = "none";
  document.getElementById("auth-section").style.display = "block";
}
