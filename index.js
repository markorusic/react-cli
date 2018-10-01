const { COMPONENT } = require('./constants/generateTypes')
const { fullPath, componentName, testName } = require('./utils/fileNames')
const { mkdir, createFile } = require('./utils/file')
const { rcfp } = require('./templates/component')

const generateComponent = ({ name }) => {
  const componentContent = rcfp({ name })
  const dirPath = name.split('/').slice(0, -1).join('/')
  const path = fullPath(dirPath)
  // Component dir (Person)
  mkdir(dirPath)
  // Component file (Person.js)
  createFile(path(componentName(name)), componentContent)
  // Test file (Person.test.js)
  createFile(path(testName(name)), '')
  // Styles file (styles.js)
  createFile(path('styles.js'), '')
  // index file (index.js)
  createFile(path('index.js'), '')
}

const generate = (type, name) => {
  if (COMPONENT.includes(type)) {
    generateComponent({ name })
  } else {
    console.error(`Type ${type} not supported.`)
  }
  process.exit()
}

module.exports = {
  generate
}
