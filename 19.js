'use strict';

// function deepCount(a) {
//   let count = 0;

//   a.forEach((el) => {
//     count++;
//     if (Array.isArray(el)) {
//       count += deepCount(el);
//     }
//   });
//   return count;
// }
function deepCount(a) {
  return a.reduce(
    (acc, cur) => acc + (Array.isArray(cur) ? deepCount(cur) : 0),
    a.length
  );
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(['1', 5, '3', ['10']]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
