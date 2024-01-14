
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let clients = [];
     for (let i = 0; i < array.length; i++) {
      if (array[i].deposits) {
        let depot = array[i].deposits;
        for (let x = 0; x < depot.length; x++) {
          if (depot[x] > 100) {
            clients.push(depot[x]);
          }
        }
      } 
    } return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function



// export function getAllDepositsGreaterThanOneHundred(array) {
//   let clients = [];
//   let depot = [0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].deposits > 100) {
//        depot = array[i].deposits;    
//   } 
//    for (let x = 0; x < array.length; x++) {
//     if (clients === undefined) {
//       return;
//     }
//    }
//  }
// clients.push(depot);
//   return clients.depot;
// }