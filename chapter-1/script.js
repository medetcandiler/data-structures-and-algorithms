// Create a grades object that stores a set of student grades in an object. Provide a func for adding a grade abd a function for diplaying students grade average

function Grades() {
  this.data = {};
  this.add = add;
  this.average = average;
  this.averageAll = averageAll;
}

function add(studentName, grade) {
  if (!this.data[studentName]) {
    this.data[studentName] = []
  };
  this.data[studentName].push(grade)
}

function average(studentName) {
  if (!this.data[studentName] || this.data[studentName].length === 0) {
    return 0;
  }
  let total = this.data[studentName].reduce((acc, curr) => acc + curr);
  return total / this.data[studentName].length
}

function averageAll() {
  let averageAll = [];
  for (let student in this.data) {
    let totalForEachStudent = this.data[student].reduce((acc, curr) => acc + curr);
    let averageForEachStudent = totalForEachStudent / this.data[student].length;
    averageAll.push(averageForEachStudent)
  }
  let average = averageAll.reduce((acc, curr) => acc + curr) / averageAll.length
  return average
}

let newGrades = new Grades();
newGrades.add('medetcan', 50);
newGrades.add('medetcan', 60);
newGrades.add('aybike', 70);

console.log(newGrades.average('medetcan'))
console.log(newGrades)
console.log(newGrades.averageAll())

// store set of words in an array and display the both forward and backword 

let words = ['medetcan', 'aybike'];
function displayForward(words) {
  let forwardWords = words.map(word => word);
  return forwardWords
}
function displayBackword(words){
  let backwordWords = words.map(word => word.split('').reverse().join('') );
  return backwordWords
}

console.log(displayForward(words))
console.log(displayBackword(words))
