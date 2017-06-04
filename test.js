const assert = require('assert')

const friendlyCron = require('./index')

let pattern = friendlyCron('every 15 minutes')
assert.equal(pattern, '0 */15 * * * *')

pattern = friendlyCron('every hour')
assert.equal(pattern, '0 0 * * * *')

pattern = friendlyCron('every damn day')
assert.equal(pattern, '0 0 0 * * *')

pattern = friendlyCron('7 seconds')
assert.equal(pattern, '*/7 * * * * *')

pattern = friendlyCron('flubber')
assert.equal(pattern, null)