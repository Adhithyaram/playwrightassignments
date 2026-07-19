function factorial(factorialOf: number) {
    let factorialCalc = 1;
    //positive number only
    if (factorialOf > 0) {
        //1! is 1
        if (factorialOf === 1) {
            console.log(`${factorialOf}! is 1`);
        }
        //2! is 2
        else if (factorialOf === 2) {
            console.log(`${factorialOf}! is 2`);
        }
        //calculate factorial
        else {
            for (let factor = 2; factor <= factorialOf; factor++) {
                factorialCalc = factorialCalc * factor;
            }
            console.log(`${factorialOf}! is ${factorialCalc}`);
        }
    }
    //throw error for negative number
    else {
        console.log(`${factorialOf} is not a valid number`);
    }
}

factorial(1);
factorial(2);
factorial(5);
factorial(10);
factorial(-10);