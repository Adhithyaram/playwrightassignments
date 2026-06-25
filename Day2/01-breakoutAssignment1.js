function oddOrEven(inputNumber) {
    let numberType = inputNumber % 2

    if (numberType === 0)
        console.log(inputNumber, " number is even");

    else if (numberType === 1)
        console.log(inputNumber, " number is odd");

    else
        console.log(inputNumber, "is not a valid number");

}

console.log("if condition");
oddOrEven(2343423)
oddOrEven(1232)
oddOrEven("Random String")

function printOddOrEven(inputNumber) {
    for (let x = 2; x <= inputNumber; x++) {
        let a = x % 2
        if (a == 0)
            console.log(x, " is an even number");
        else
            console.log(x, " is an odd number");
    }
}
console.log("for loop");
printOddOrEven(13)
