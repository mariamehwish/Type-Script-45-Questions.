let grades = [83,67,78,99,43,58];

let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);