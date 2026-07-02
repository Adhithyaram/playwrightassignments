//initialize the array
const nums=[2,4,5,2,1,2];

const k=2;
//initialize countOfTwo
let count=0;

//for loop to iterate through the array
for (let index=0; index<nums.length; index++){
    //if the value at the index of the array is 2, increase count
    if(nums[index]===k){
        count++;
    }
}

//Print the number of occurrences of 2 in the array
console.log(`Number of occurrences of ${k} is ${count}`);
