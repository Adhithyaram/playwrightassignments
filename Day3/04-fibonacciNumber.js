/**
 * ---
 * Author      : Adhithya Ram
 * Program     : Fibonacci Number
 * Description : Find nth Fibonacci Number
 * Date        : 27-Jun-2026
 * ---
 */

/**
 * Demonstrates to identify nth fibonacci number.
 *
 * @param {number} seqNo
 * @author Adhithya Ram
 */

function fibonacciSeries(seqNo) {
    let seriesNumber = 0;
    let currentNumber = 1;
    let fibonacciNumber;

    //first fibonacciNumber
    if (seqNo === 1) {
        return `Fibonacci Number of sequence ${seqNo} is ${currentNumber}`;
    }

    //identify fibonacci numbers
    else {
        for (let index = 2; index <= seqNo; index++) {
            fibonacciNumber = seriesNumber + currentNumber;
            seriesNumber = currentNumber;
            currentNumber = fibonacciNumber;
        }
        return `Fibonacci Number of sequence ${seqNo} is ${currentNumber}`;
    }
}

console.log(fibonacciSeries(4));