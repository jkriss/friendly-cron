const friendlyCron = require('./index')
const parser = require('cron-parser')

// generate random offsets so we don't have everything land on the hour
const pattern = friendlyCron('every 15 minutes', { random: true })
console.log(pattern)
const interval = parser.parseExpression(pattern)

console.log(interval.next().toString())
console.log(interval.next().toString())
console.log(interval.next().toString())
console.log(interval.next().toString())
console.log(interval.next().toString())