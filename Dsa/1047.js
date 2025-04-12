

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"


var removeDuplicates = function(s) {
    let stack = [];
for(let i=0;i<s.length;i++){
    if(stack[stack.length-1]==s[i]){
        stack.pop()
    }else{
        stack.push(s[i])
    }
}
return stack.join('')
};