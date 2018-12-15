# friendly-cron

## Installation

`npm install friendly-cron`

## Usage

    const friendlyCron = require('friendly-cron')

    const pattern = friendlyCron('every 15 minutes')
    // returns 0 */15 * * * *

## API

`friendly-cron` exposes a single function that returns either a cron expression string or null if the input string isn't parseable.

It's a very simple matching function that looks for "second", "minute", "hour", "day", "month", or "year", optionally proceeded by a number.

Example valid strings:
- "every hour"
- "every 15 minutes"
- "10 days"

### Random offsets

It's often the case that you want jobs to run at some interval, but you don't want everything running in batches at, say, the top of the hour.

To add a random offset to your cron pattern, you can add the `{ random: true }` option, like so:

    const pattern = friendlyCron('every 15 minutes', { random: true })
    // returns something like 34 0-59/15 * * * *
