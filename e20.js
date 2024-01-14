
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let withA = [];
  let notA = [];
  for (let i = 0; i < array.length; i++) {
    let currentName = array[i];
    let hasA = false;
    for (let x = 0; x < currentName.length; x++) {
      if (currentName[x].toLowerCase() === 'a') {
        hasA = true;
        break; 
      }
    }
    if (hasA) {
      withA.push(currentName);
    } else {
      notA.push(currentName);
    }
  }
  return [withA, notA];
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// export function separateNamesWithAFromRest(array) {
//   console.log(array);
//   let withA = [];
//   let notA = []; 
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//       let names = array[i];
//       hasA = false;
//     for (let x = 0; x < names.length; x++) {
//       if (names[x].toLowerCase() === 'a') {
//          hasA = true;
//          break;
//       }
//     } 
//   } if (hasA) {
//     withA.push(names);
//   } else {
//     notA.push(names);
//   } arr.push(withA, notA);
//    return arr;
// }