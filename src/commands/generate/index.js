const log = require('../../utils/log')
const { COMPONENT } = require('../../constants/generateTypes')
const generateComponent = require('./generateComponent')

const generate = (type, dirPath) => {
  if (COMPONENT.includes(type)) {
    generateComponent({ dirPath })
  } else {
    log.error(`Type ${type} not supported.`)
  }
  process.exit()
}

module.exports = {
  generate
}
