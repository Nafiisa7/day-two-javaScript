# 🌟 100 Days of Code - Day 2 🌟

🎉 Today marks the second day of my **100 Days of Code Challenge**, and I’m thrilled to share my progress! 🚀

---

## Day 2 Highlights ✨
- **What I Learned:**
  - Functions: Writing reusable blocks of code.
  - Arrays: Storing and manipulating lists of data.
  - Loops: Repeating tasks efficiently.
  - Objects: Organizing data and methods in a structured way.

---

## My Code 💻
Here’s a snippet of one of the tasks I worked on today:
```javascript
const student = {
  name: "Nafiisa",
  age: 18,
  grades: [90, 85, 88],
  getAverageGrade: function () {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return (total / this.grades.length).toFixed(2);
  },
  getDetails: function () {
    return `Name: ${this.name}, Age: ${this.age}, Average Grade: ${this.getAverageGrade()}`;
  },
};

console.log(student.getDetails());
