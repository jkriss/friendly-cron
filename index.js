const places = 'second minute hour day month year'.split(' ')
const maxes = [59, 59, 23, 30]

module.exports = function(string, opts) {
  const match = string.match(/(\d+)? (second|minute|hour|day|month|year)/)
  const rand = opts && opts.random
  if (match) {
    let pattern = Array(6).fill('*')
    const count = match[1] || 1
    const interval = match[2]
    const intervalPlace = places.indexOf(interval)
    if (count !== 1) {
      pattern[intervalPlace] = `${rand ? Math.round(Math.random() * (maxes[intervalPlace]/count))+`-${maxes[intervalPlace]}` : '*'}/${count}`
      // pattern[intervalPlace] = `*/${count}`
    }
    for (let i=intervalPlace-1; i>=0; i--) {
      const fillVal = rand ? Math.round(Math.random() * maxes[i]) : 0
      pattern[i] = fillVal
    }
    return pattern.join(' ')
  } else {
    return null
  }
}