
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = [];
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance !== undefined && array[i].withdrawals !== undefined) {
      filteredArray.push(array[i]);
    }
  }  
  for (let i = 0; i < filteredArray.length; i++) {
  let sumWithdrawals = 0;
  let sumDeposits = 0;
    for (let j = 0; j < filteredArray[i].withdrawals.length; j++) {
    sumWithdrawals += filteredArray[i].withdrawals[j];
    }
    for (let k = 0; k < filteredArray[i].deposits.length; k++) {
    sumDeposits += filteredArray[i].deposits[k];      
    }
    if (sumDeposits - sumWithdrawals !== filteredArray[i].balance) {
      wrongBalance.push(filteredArray[i]);
    }
  }
  return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
