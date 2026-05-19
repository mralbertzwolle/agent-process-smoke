const { readFileSync } = require('node:fs')

const readme = readFileSync('README.md', 'utf8')

if (!readme.includes('Agent Process Smoke')) {
  throw new Error('README.md must identify the smoke repository')
}

console.log('smoke checks passed')
