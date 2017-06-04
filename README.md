# friendly-cron

## Installation

`npm install friendly-cron`

## Usage

    const friendlyCron = require('friendly-cron')

    const pattern = friendlyCron('every 15 minutes') // returns 0 */15 * * * *

## API

`friendly-cron` exposes a single function that returns either a cron expression string or null if the input string isn't parseable.

It's a very simple matching function that looks for "second", "minute", "hour", "day", "month", or "year", optionally proceeded by a number.

Example valid strings:
- "every hour"
- "every 15 minutes"
- "10 days"

