// Retrieve existing students from localStorage
let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];

// Login function
function login() {
  let name = document.getElementById("loginName").value;
  let password = document.getElementById("loginPassword").value;

  let found = students.find(student => student.name === name && student.password === password);

  if (found) {
    alert("Login Successful!");
    localStorage.setItem("currentUser", name); // Store logged-in user
    window.location.href = "hero.html"; // Redirect to Hero page
  } else {
    alert("Invalid Credentials.");
  }
}
