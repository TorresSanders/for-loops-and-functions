
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
  console.log(array);
  console.log(value);
    for (let i = 0; i < array.length; i++) {
      let check = false;
      for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] === value) {
          check = true;
          break; 
        } 
      } 
      if (check) {
        return true;
      }
    }
     
    return false;
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function



// export function doesArrayInclude(array, value) {
//   console.log(array);
//   console.log(value);
//   for (let i = 0; i < array.length; i++) {
//     let check = false;
//     for (let x = 0; x < array[i].length; x++) {
//       if (array[i][x] === value) {
//         check = true;
//       } 
//     } 
//      if (check) {
//       return true;
//      } else {
//       return false;
//      }
//   }
// }