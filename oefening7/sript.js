let spreadsheet = [
    [100, 104, 105],
    [144, 110, 109],
    [105, 107, 111]
];

let sumRow1 = 0;

for(let kolomIndex =0; kolomIndex < spreadsheet[0].length; kolomIndex++){
    sumRow1 = sumRow1 + spreadsheet[0][kolomIndex];
}

console.log(sumRow1); 