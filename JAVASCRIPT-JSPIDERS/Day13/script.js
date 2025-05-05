const students = [
    { id: 1, name: "Emma Johnson", age: 18, grade: "A", subjects: ["Math", "Physics", "Chemistry"] },
    { id: 2, name: "Liam Smith", age: 17, grade: "B+", subjects: ["Biology", "History", "English"] },
    { id: 3, name: "Olivia Brown", age: 19, grade: "A-", subjects: ["Computer Science", "Math", "Art"] },
    { id: 4, name: "Noah Wilson", age: 18, grade: "B", subjects: ["Geography", "Economics", "Psychology"] },
    { id: 5, name: "Ava Taylor", age: 17, grade: "A", subjects: ["Literature", "French", "Music"] },
    { id: 6, name: "William Martinez", age: 18, grade: "B+", subjects: ["Math", "Physics", "Engineering"] },
    { id: 7, name: "Sophia Anderson", age: 19, grade: "A-", subjects: ["Biology", "Chemistry", "Spanish"] },
    { id: 8, name: "Benjamin Thomas", age: 17, grade: "C+", subjects: ["History", "English", "Drama"] },
    { id: 9, name: "Isabella Jackson", age: 18, grade: "B", subjects: ["Art", "Music", "Dance"] },
    { id: 10, name: "Lucas White", age: 19, grade: "A", subjects: ["Computer Science", "Math", "Physics"] },
    { id: 11, name: "Mia Harris", age: 17, grade: "B-", subjects: ["Economics", "Psychology", "Sociology"] },
    { id: 12, name: "Henry Clark", age: 18, grade: "A+", subjects: ["Chemistry", "Biology", "Geology"] },
    { id: 13, name: "Charlotte Lewis", age: 17, grade: "B", subjects: ["English", "Creative Writing", "Journalism"] },
    { id: 14, name: "Alexander Walker", age: 19, grade: "A-", subjects: ["Math", "Statistics", "Business"] },
    { id: 15, name: "Amelia Hall", age: 18, grade: "C+", subjects: ["History", "Political Science", "Law"] },
    { id: 16, name: "James Allen", age: 17, grade: "B+", subjects: ["Physics", "Astronomy", "Engineering"] },
    { id: 17, name: "Harper Young", age: 18, grade: "A", subjects: ["Biology", "Environmental Science", "Chemistry"] },
    { id: 18, name: "Michael King", age: 19, grade: "B-", subjects: ["Music", "Theater", "Film Studies"] },
    { id: 19, name: "Evelyn Scott", age: 17, grade: "A+", subjects: ["Math", "Computer Science", "Robotics"] },
    { id: 20, name: "Daniel Green", age: 18, grade: "B", subjects: ["Economics", "Finance", "Accounting"] },
    { id: 21, name: "Abigail Baker", age: 19, grade: "A-", subjects: ["Psychology", "Philosophy", "Anthropology"] },
    { id: 22, name: "Matthew Adams", age: 17, grade: "C", subjects: ["Geography", "Meteorology", "Oceanography"] },
    { id: 23, name: "Emily Nelson", age: 18, grade: "B+", subjects: ["French", "German", "Linguistics"] },
    { id: 24, name: "David Carter", age: 19, grade: "A", subjects: ["Engineering", "Architecture", "Design"] },
    { id: 25, name: "Elizabeth Mitchell", age: 17, grade: "B-", subjects: ["Art History", "Studio Art", "Photography"] },
    { id: 26, name: "Joseph Perez", age: 18, grade: "A+", subjects: ["Computer Programming", "Data Science", "AI"] },
    { id: 27, name: "Sofia Roberts", age: 19, grade: "B", subjects: ["Literature", "Poetry", "Mythology"] },
    { id: 28, name: "Jackson Turner", age: 17, grade: "A-", subjects: ["Physics", "Quantum Mechanics", "Nanotechnology"] },
    { id: 29, name: "Avery Phillips", age: 18, grade: "C+", subjects: ["Sociology", "Gender Studies", "Ethics"] },
    { id: 30, name: "Scarlett Campbell", age: 19, grade: "B+", subjects: ["Medicine", "Nutrition", "Public Health"] }
];

const tableBody = document.getElementById("tableBody");

students.forEach(student => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.subjects.join(", ")}</td>
    `;
    
    tableBody.appendChild(row);
});