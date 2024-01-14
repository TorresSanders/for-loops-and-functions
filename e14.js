
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  console.log(array);
  let clients = [];
  let depotAmt = [];
    let wit = [];
  for (let i = 0; i < array.length; i++) {
    depotAmt.push(0);
    wit.push(0);
    if (array[i].deposits) {
      for (let x = 0; x < array[i].deposits.length; x++) {
        depotAmt[i] += array[i].deposits[x];
      } 
      }else {
        depotAmt[i] = 0;
      } if (array[i].withdrawals) {
      for (let a = 0; a < array[i].withdrawals.length; a++) {
        wit[i] -= array[i].withdrawals[a]; 
       }
     } else {
      wit[i] = 0;
     }
      if (depotAmt[i] + wit[i] !== array[i].balance) {
       clients.push(array[i]);
      }
     } return clients;
  }




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// array  ..check
// for loop to run through array  ..check
// check if array has both deposits and withdrawals  ..check
// check if balance equals the diff of depo and with  ..check
// if bal doesn't equal diff of depo and with  ..check
// return accounts with wrong bal  ..check