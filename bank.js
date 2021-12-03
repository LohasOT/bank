// For this activity you will be building a fake banking application that allows a user to keep track of transactions on a bank.txt file. The text file has already been populated with some starter data to give you a place to begin from. See the commands below as well as their descriptions for further guidance (Hint: You will need to use the 'fs' node package to complete this activity).

// Command #1: node bank.js deposit <Dollar_Amount> (ex: node bank.js deposit 25)
// For this command, take the amount provided and append it onto the bank.txt file. Keep in mind that values in the text file are separated by a ', ' so make sure to include that.

// Command #2: node bank.js withdraw <Dollar_Amount> (ex: node bank.js withdraw 25)
// For this command, take the amount provided and append the negative of it onto the bank.txt file. Keep in mind that values in the text file are separated by a ', ' so make sure to include that.

// Command #3: node bank.js lotto
// For this command, create a randomizer that outputs a win/lose situation (ex: get a random number between 1 & 50. If it's less than 25 they win, if it's greater they lose.). Append onto the bank.txt file a withdrawal of 25 cents. If they win the lottery also append a deposit of 10 dollars. Keep in mind that values in the text file are separated by a ', ' so make sure to include that.

// Command #3: node bank.js balance
// For this command, retrieve all the transaction values from the bank.txt file. Separate the string into it's individual parts (Hint: look up the string '.split()' method). Total up all transactions and output a total balance for the user.

// BONUS: Begin learning about NPM (https://www.npmjs.com/). There is a package called 'console.table'. See if you can set up a command for 'node bank.js transactions', which would display a table with every transaction made by the user. This is a stretch so don't worry if it's too hard.


const atm = require('./system.js')

const op = (process.argv[2])
const newMoney = parseInt(process.argv[3])

atm(op, newMoney)