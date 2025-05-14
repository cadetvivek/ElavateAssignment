// const result = reverseWords("JavaScript is fun");
// console.log(result);
// // Output: "tpircSavaJ si nuf"


function reverseWords(str){
    return str.split('').reverse('').join('').split(' ').reverse().join(' ')
}
console.log(reverseWords("JavaScript is fun"))
