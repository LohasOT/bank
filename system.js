const fs = require('fs')
const atm = (op, newMoney) => {
  switch (op) {
    case 'deposit':
      fs.appendFile('bank.txt', `, ${newMoney}`, err => {
        if (err) { console.log(err) }
      })
      break
    case 'withdraw':
      fs.appendFile('bank.txt', `, -${newMoney}`, err => {
        if (err) { console.log(err) }
      })
      break
    case 'checkBalance':
      fs.readFile('bank.txt', 'utf8', (err, data) => {
        if (err) { console.log(err) }
        let money = data.toString().split(", ");
        console.log(`Balance: ${money}`)
      })
      break
    case 'lotto':
      let x = Math.ceil(Math.random() * 50)
      console.log(x)
      if (x <= 25) {
        (console.log('You Win'))
        fs.appendFile('bank.txt', `, 10`, err => {
          if (err) { console.log(err) }
        })
      }
      else if (x > 25) {
        fs.appendFile('bank.txt', `, -0.25`, err => {
          (console.log('You Lose'))
        })
      }
      break
    }
  }
module.exports = atm