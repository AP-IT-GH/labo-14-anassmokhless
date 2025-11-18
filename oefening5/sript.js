let grades = [];
let grade = 0;
let sum = 0;
let average = 0;
let badGrades = 0;


while(!isNaN(grade)){
    let index = 0;
    grade = parseInt(prompt("Geef een resultaat in"));
    grades[index] = grade;
    index++;
}


for(let index = 0; index < grades.length; index++){
    sum = sum + grades[index];

    if(grades[index] < 10){
        badGrades++
    }
}

average = sum / grades.length;

console.log(`De som van je punten is ${sum}`);
console.log(`Het gemiddelde van je punten is ${average}`);
console.log(`Je bent gebuist op ${badGrades} vakken`);