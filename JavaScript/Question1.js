// const result = countVowelsAndConsonants("Hello World!");
// console.log(result);
// Output: { vowels: 3, consonants: 7 }


function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    
    let vowelCount = 0;
    let consonantCount = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            vowelCount++;
        }
        else if(consonants.includes(str[i])){
            consonantCount++;
        }

    }
    return { vowels: vowelCount, consonants: consonantCount };
}
console.log(countVowelsAndConsonants("Hello World!"));

