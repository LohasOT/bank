const movies = require('./system.js')
// console.log(movies)
const fs = require('fs')

// fs.writeFile('example.txt', `${movies}`, err => {
//   if (err) { console.log(err) }
// })

fs.appendFile('bank.txt', 'additional text goes here', err => {
  if (err) { console.log(err) }
})

fs.readFile('bank.txt', 'utf8', (err, data) => {
  if (err) { console.log(err) }
  console.log(`Nathan's SSN: ${data}`)
})


