function Fibonacci(amountOfNumbers){
    let fibonacciArray = [0,1,1];
    
    for(let i = 1; i < amountOfNumbers -2; i++){
        let nextNumber = fibonacciArray[i] + fibonacciArray[i+1];
        fibonacciArray.push(nextNumber);
    }

    console.log(fibonacciArray);
}

Fibonacci(10);