// 1. Remove the last 4 fruits from the end of the array.
// 2. Add the removed fruits to the beginning of the array in the same order they were removed.

// Write a JavaScript function named **`rearrangeFruits`** that takes an array of fruits as input and performs the specified rearrangement. The function should return the modified array of fruits.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
const last4Fruite = fruits.splice(6,4)
const start = fruits.splice(0,6)

console.log([...last4Fruite,...start])
