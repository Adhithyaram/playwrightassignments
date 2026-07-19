function fibonacci(fibonacciSeries: number) {
    let seriesStart = 0;
    let currentNumber = 1;
    let fibonacciNumber;
    //positive number only
    if (fibonacciSeries > 0) {
        //first fibonacci number
        if (fibonacciSeries === 1) {
            console.log(`Fibonacci Number of sequence ${fibonacciSeries} is ${seriesStart}`);
        }
        //second fibonacci number
        else if (fibonacciSeries === 2) {
            console.log(`Fibonacci Number of sequence ${fibonacciSeries} is ${currentNumber}`);
        }
        //identify fibonacci numbers
        else {
            console.log(`fibonacci 1 = ${seriesStart}\nfibonacci 2 = ${currentNumber}`);
            for (let index = 3; index <= fibonacciSeries; index++) {
                fibonacciNumber = seriesStart + currentNumber;
                seriesStart = currentNumber;
                currentNumber = fibonacciNumber;
                console.log(`fibonacci ${index} = ${fibonacciNumber}`);
                
            }
            console.log(`Fibonacci Number of sequence ${fibonacciSeries} is ${currentNumber}`);
        }
    }
    //throw error for negative number
    else {
        console.log(`${fibonacciSeries} is not a valid number`);
    }
}

fibonacci(-33);
fibonacci(8);
fibonacci(2);
fibonacci(1);
fibonacci(5);
fibonacci(3);