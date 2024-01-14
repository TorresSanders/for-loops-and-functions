
// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  console.log(array);
  let rev = [];
  for (let i = array.length -1; i >= 0; i--) {
    rev.push(array[i]);
  } return rev;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function





// console.log(array);
// let rev = []; 
// let num = array[0];
// for (let i = 0; i < array.length; i++) {
//   num = num * 10 + (array[i] % 10);
//   num = Math.floor(num/10);
// }
//  return rev;