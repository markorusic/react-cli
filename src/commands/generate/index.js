const { COMPONENT } = require('../../constants/generateTypes')
const generateComponent = require('./generateComponent')

const generate = (type, dirPath) => {
  if (COMPONENT.includes(type)) {
    generateComponent({ dirPath })
  } else {
    console.error(`Type ${type} not supported.`)
  }
  process.exit()
}

module.exports = {
  generate
}
