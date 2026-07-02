/**
 * ---
 * Author      : Adhithya Ram
 * Program     : callback function
 * Description : Perform callback function
 * Date        : 27-Jun-2026
 * ---
 */
/**
 * Demonstrates callback function with setTimeout.
 *
 * @param {array} arr1
 * @param {array} arr2
 * @author Adhithya Ram
 */

let browser="chrome25.1.1";
let checkBrowserVersion=function(function1){
    setTimeout(function1,2000);
}

function browserVersion(){
    console.log(`Printing ${browser} version after 2 seconds delay`);
}

checkBrowserVersion(browserVersion);