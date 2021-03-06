'use strict'

const { exec } = require('child_process')
const vnu = require('vnu-jar')

exec(`java -jar ${vnu} --skip-non-html public`, (error, stdout) => {
  if (error) {
    console.log(`exec error: ${error}`)
    process.exit(error.code)
  }
  console.log(stdout)
})
