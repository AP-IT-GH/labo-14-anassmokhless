function ArraySum(numbersArray){
    console.log(numbersArray);
    
    let sum = 0;

    for(let i =0; i < numbersArray.length; i++){
        sum = sum + numbersArray[i];
    }

    return sum;
}

console.log(ArraySum([1,2,3,4,5,6]));