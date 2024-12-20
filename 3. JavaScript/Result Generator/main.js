// Array to store student data with roll numbers, names, grades, and remarks
const studentsData = [
    { rollNo: "1001", name: "Ali", grade: "A", remarks: "Excellent" },
    { rollNo: "1002", name: "Sara", grade: "B", remarks: "Good" },
    { rollNo: "1003", name: "Usman", grade: "A+", remarks: "Outstanding" },
    { rollNo: "1004", name: "Ayesha", grade: "C", remarks: "Needs Improvement" },
    { rollNo: "1005", name: "Zain", grade: "A", remarks: "Very Good" },
    { rollNo: "1006", name: "Maira", grade: "B+", remarks: "Good Job" },
    { rollNo: "1007", name: "Bilal", grade: "D", remarks: "Pass" },
    { rollNo: "1008", name: "Hira", grade: "B+", remarks: "Well Done" },
    { rollNo: "1009", name: "Saad", grade: "A+", remarks: "Exceptional" },
    { rollNo: "1010", name: "Farah", grade: "C+", remarks: "Can Improve" }
];

// Function to generate result for a given roll number
function generateResult() {
    // Get the roll number from input
    const rollNo = document.getElementById("rollNoInput").value;

    // Find the student with the given roll number
    const student = studentsData.find(student => student.rollNo === rollNo);

    // Get the result and not found elements
    const resultDiv = document.getElementById("result");
    const notFoundMessage = document.getElementById("notFoundMessage");

    // Check if the student exists
    if (student) {
        // Display the student details in the result area
        document.getElementById("studentRoll").innerText = student.rollNo;
        document.getElementById("studentName").innerText = student.name;
        document.getElementById("studentGrade").innerText = student.grade;
        document.getElementById("studentRemarks").innerText = student.remarks;
        
        // Show result and hide "not found" message
        resultDiv.style.display = "block";
        notFoundMessage.style.display = "none";
    } else {
        // Hide result and show "not found" message
        resultDiv.style.display = "none";
        notFoundMessage.style.display = "block";
    }
}
