// const result = isPalindrome("A man, a plan, a canal, Panama");
// console.log(result);
// // Output: true

function isPalindrome(str){
    const cleanStr = str.toLowerCase().split(',').join('')
    return cleanStr === cleanStr.split('').reverse().join('')

}
console.log(isPalindrome("A man, a plan, a canal, Panama"))
