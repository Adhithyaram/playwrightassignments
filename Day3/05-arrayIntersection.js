/**
 * ---
 * Author      : Adhithya Ram
 * Program     : Array
 * Description : Perform Array Intersection without any duplicate elements
 * Date        : 27-Jun-2026
 * ---
 */
/**
 * Demonstrates logic to perform unique intersection of arrays.
 *
 * @param {array} arr1
 * @param {array} arr2
 * @author Adhithya Ram
 */

let arrayIntersection = (arr1, arr2) => {
    let array1 = arr1
    let array2 = arr2
    let array1Length = array1.length;
    let array2Length = array2.length;
    let intersectArray = [];

    //find duplicate values between the arrays
    for (let index1 = 0; index1 < array1Length; index1++) {
        for (let index2 = 0; index2 < array2Length; index2++) {
            if (array1.at(index1) === array2.at(index2)) {
                console.log(`Element in array2[${index2}] is a duplicate of element in array 1[${index1}]`);
            }
        }
    }

    //push array1 to intersectArray
    for (let ind = 0; ind < array1Length; ind++) {
        intersectArray.push(array1.at(ind));
    }
    //push array2 to intersectArray
    for (let ind = 0; ind < array2Length; ind++) {
        intersectArray.push(array2.at(ind));
    }

    //remove duplicates from the array
    const uniqueArray = new Set(intersectArray);
    console.log(`unique array is ${Array.from(uniqueArray)}`);

}

//1 duplicate
arrayIntersection([1, 2, 3], [4, 1, 6]);
//no duplicates
arrayIntersection([1, 2, 3], [4, 5, 6]);
//all duplicate
arrayIntersection([1, 2, 3], [1, 2, 3]);