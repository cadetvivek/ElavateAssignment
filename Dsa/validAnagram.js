// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

let  s = "anagram", t = "nagaram";
if(s.length!==t.length) return false
let first = s.split('').sort().join()
let second = s.split('').sort().join()
return first==second