// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
   let clients = [];
  for (let i = 0; i < array.length; i++) {   
   for (let x = 0; x < array[i].name.length; x++) {
      if (array[i].name[x].toLowerCase() === letter.toLowerCase()) {
         clients.push(array[i].name);
      }
   }
  }
     return clients;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function






// let clients = [];
// let name = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array.name === letter) {
//        name = array[i].name;
//        clients.push(name);
//     }
// }
//     clients.push(name);
//    return clients;