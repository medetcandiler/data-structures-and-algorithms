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
function displayBackword(words) {
  let backwordWords = words.map(word => word.split('').reverse().join(''));
  return backwordWords
}

console.log(displayForward(words))
console.log(displayBackword(words))

//Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.

function MonthTemps() {
  this.dataStore = [];
  this.addWeek = addWeek;
  this.monthlyAverage = monthlyAverage;
  this.weeklyAverage = weeklyAverage;
};

function addWeek(weeklyTempArr) {
  this.dataStore.push(weeklyTempArr);
};

function monthlyAverage() {
  let monthlyTotalTemp = 0;
  let monthlyAverage = 0;
  for (let row = 0; row < this.dataStore.length; row++) {
    for (let col = 0; col < this.dataStore[row].length; col++) {
      monthlyTotalTemp += this.dataStore[row][col];
    }
  }
  monthlyAverage = monthlyTotalTemp / this.dataStore.flat().length
  return { monthlyAverage, monthlyTotalTemp }
}

function weeklyAverage() {
  let weeklyAverages = [];
  for (let row = 0; row < this.dataStore.length; row++) {
    let weeklyTotalTemp = 0
    for (let col = 0; col < this.dataStore[row].length; col++) {
      weeklyTotalTemp += this.dataStore[row][col]
    }
    let perWeekAverage = weeklyTotalTemp / this.dataStore[row].length;
    weeklyAverages.push(perWeekAverage)
  }

  return weeklyAverages
}

const month = new MonthTemps();
month.addWeek([10, 20, 10, 10, 10]);
month.addWeek([10, 10, 30, 10, 10]);
month.addWeek([10, 10, 10, 10, 10])
console.log(month)
console.log(month.monthlyAverage())
console.log(month.weeklyAverage())

// Create an object that stores individual letters in an array and has a function for displaying the letters in a single word.
function Letters() {
  this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
}

Letters.prototype.display = function() {
  const words = this.letters.join('');
  console.log(words)
  return words
}


const letterInstance = new Letters();
letterInstance.display();








