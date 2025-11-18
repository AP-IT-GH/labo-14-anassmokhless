let grades = [];
let grade = 0;
let sum = 0;
let average = 0;
let badGrades = 0;
let index = 0;

while (!isNaN(grade)) {
    grade = parseInt(prompt("Geef een resultaat in"));
    grades[index] = grade;
    index++;
}

grades.pop();

console.log(grades);

for (let index2 = 0; index2 < grades.length; index2++) {
  sum = sum + grades[index2];

  if (grades[index2] < 10) {
    badGrades++;
  }
}

average = sum / grades.length;

console.log(`De som van je punten is ${sum}`);
console.log(`Het gemiddelde van je punten is ${average}`);
console.log(`Je bent gebuist op ${badGrades} vakken`);
