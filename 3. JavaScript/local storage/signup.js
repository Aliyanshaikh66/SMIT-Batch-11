// Retrieve existing students from localStorage
let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];

// Sign-Up function
function signUp() {
  let name = document.getElementById("signUpName").value;
  let password = document.getElementById("signUpPassword").value;

  if (name && password) {
    let student = { name, password };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Sign-Up Successful! Please Login.");
    window.location.href = "login.html"; // Redirect to Login page
  } else {
    alert("Please fill all fields.");
  }
}
