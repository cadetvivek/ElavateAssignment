// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// let arr = [1,2,3,4,5,6,7], k = 3
// let n = arr.length;
// for(let i=0;i<k;i++){
//     let last = arr.pop();
//     arr.unshift(last);
// }
// console.log(arr)


// second method 
let  arr = [1,2,3,4,5,6,7], k = 3;
let n = arr.length;

for(let i=arr.length-1;i>=0;i--){
   arr[i+k] = arr[i]
  
} 
for(let j=k-1;j>=0;j--){
    arr[j] = arr.pop()
}
console.log(arr)
