/**
 * ---
 * Author      : Adhithya Ram
 * Program     : Functions Demonstration
 * Description : Demonstrates usage of various functions
 * Date        : 27-Jun-2026
 * ---
 */

/**
 * Demonstrates function types.
 * Named Function, Anonymous Function, Parameterized Function, Callback Function, Arrow Function.
 *
 * @param {string} name username
 * @param {number} number number to double
 * @author Adhithya Ram
 */
//userProfile Function Declaration
function userProfile(name){
    //Print Console Log Hello <name>!
    console.log(`Hello ${name}!`);
}
//call userProfile
userProfile("TestUser");

//arrowFunction double declaration
let makeDouble=(number)=>{
    //double the number
    let doubledNumber=number*2;

    //log the result
    console.log(`Doubled value of ${number} is ${doubledNumber}`);    
}

//call makeDouble function
makeDouble(1342);

//Anonymous Function
let logMessage=function(){
    console.log("This message is delayed by 2 seconds");
}

//Function to be called back
function calledFunction(){
    console.log("Call back function log printed after 3 seconds");    
}

//Callback function calling anonymous function and a named function with function names as the parameters
let callBackFunction=function(function1,function2){
    //Execute anonymous function with 2 second delay
    setTimeout(function1,2000);

    //Execute the invoked function with 3 second delay
    setTimeout(function2,3000)
}

//invoke the callback function with required arguments
callBackFunction(logMessage,calledFunction);