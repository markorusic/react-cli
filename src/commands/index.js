const { generate } = require('./generate')

const init = (program, process) => {
  program
    .version('0.0.1')
    .description('React CLI Generator')

  program
    .command('generate <type> <dirPath>')
    .alias('g')
    .description('Generate <type> <dirPath>')
    .action((...args) => generate(...args))

  program.parse(process.argv);
}

module.exports = {
  init
}
