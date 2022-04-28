'use strict';

// function isPangram(string) {
//   const uniqueLetters = new Set(string.toLowerCase().split(''));

//   return uniqueLetters.size >= 26;
// }
function isPangram(string) {
  const lettersArr = string.split('');
  let unigueLetters = [];

  for (let letter of lettersArr) {
    if (!unigueLetters.includes(letter) && letter !== ' ') {
      unigueLetters.push(letter);
    }
  }

  return unigueLetters.length >= 26;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));
