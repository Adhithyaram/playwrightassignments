let charArray=["a","b","c","d","e"];
console.log(`original array is ${charArray}`);

let editedArray=charArray.splice(1,0,"f");
console.log(`edited array is ${editedArray}`);

let testIDs=[100,200,302,100,302,500];
//To identify the unique values
let uniqueIDs=new Set(testIDs);
console.log(`array with all elements ${testIDs}`);

//To print only the array elements
console.log(`array with unique elements ${Array.from(uniqueIDs)}`);

//To print array elements within curly braces mentioning the array size denoting the unique elements within the array
console.log(uniqueIDs);

