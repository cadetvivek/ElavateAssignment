// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: arr = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


let arr = [0,1,0,3,12];
let arrSort = arr.sort((a,b)=>a-b)
let arr1 = arrSort.slice(0,2)
let arr2 = arrSort.slice(2,5)
console.log([...arr2,...arr1])

