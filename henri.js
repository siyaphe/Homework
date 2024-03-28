let allStudents = {
    jordan: {
      name: "Jordan",
      grade: "",
      missingAssignments: "N/A",
    },
    kyle: {
      name: "Kyle",
      grade: "",
      missingAssignments: "N/A",
    },
    maxine: {
      name: "Maxine",
      grade: "",
      missingAssignments: "N/A",
    },
    kadesha: {
      name: "Kadesha",
      grade: "",
      missingAssignments: "N/A",
    },
  };
  
  let students = ["Jordan", "Kyle", "Maxine", "Kadesha"];
  
  // Function to generate students and their info
  const generateStudents = () => {
    const container = document.getElementById("container");
    container.innerHTML = ''; // Clear existing content
  
    students.forEach((studentName) => {
      const student = allStudents[studentName.toLowerCase()];
  
      const studentDiv = document.createElement("div");
      studentDiv.classList.add("student");
  
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = "Name: " + student.name;
  
      const gradeInput = document.createElement("input");
      gradeInput.type = "text";
      gradeInput.placeholder = "-- /100";
      gradeInput.value = student.grade; // Set initial value
      gradeInput.addEventListener("input", function() {
        // Update the grade in the allStudents object when the input changes
        student.grade = this.value;
       
      });
  
      const missingAssignmentsParagraph = document.createElement("p");
      missingAssignmentsParagraph.textContent = "Missing Assignments: " + student.missingAssignments;
  
      studentDiv.appendChild(nameParagraph);
      studentDiv.appendChild(gradeInput);
      studentDiv.appendChild(missingAssignmentsParagraph);
  
      container.appendChild(studentDiv);
    });
  };
  
  // Function to update student grade

  const updateGrade = () => {
    const studentNameInput = document.getElementById("studentName").value;
    const newGradeInput = document.getElementById("newGrade").value;
  
    // Check if the entered student name exists

    if (allStudents.hasOwnProperty(studentNameInput.toLowerCase())) {
      allStudents[studentNameInput.toLowerCase()].grade = newGradeInput;
      generateStudents(); // Re-generate the student list to reflect the updated grade
    } else {
      alert("Student not found!");
    }
  };
  
  // Call the function to generate students and their info
  generateStudents();
  
  