#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

fs.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('There was an unexpected error.', err)
    process.exit(1)
  }

  const { version } = JSON.parse(data)
  require('./main')
    .main(version)
    .then(() => process.exit(0))
    .catch((err: any) => {
      console.error(err)
      process.exit(1)
    })
})
