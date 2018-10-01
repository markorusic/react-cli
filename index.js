const { COMPONENT } = require('./constants/generateTypes')
const { componentNameFromPath } = require('./utils/fileNames')
const { mkdir, createJsFile } = require('./utils/file')
const { rcfp, index, styles, test } = require('./templates/component')

const generateComponent = ({ dirPath }) => {
  const componentName = componentNameFromPath(dirPath)
  const cmpContent = rcfp({ name: componentName })
  const testContent = test({ name: componentName })
  const indexContent = index({ name: componentName })
  const stylesContent = styles()
  // Component dir (Person)
  mkdir(dirPath)
  // Component file (Person.js)
  createJsFile(dirPath, componentName, cmpContent)
  // Test file (Person.test.js)
  createJsFile(dirPath, `${componentName}.test`, testContent)
  // Styles file (styles.js)
  createJsFile(dirPath, 'styles', stylesContent)
  // index file (index.js)
  createJsFile(dirPath, 'index', indexContent)
}

const generate = (type, name) => {
  if (COMPONENT.includes(type)) {
    generateComponent({ dirPath: name })
  } else {
    console.error(`Type ${type} not supported.`)
  }
  process.exit()
}

module.exports = {
  generate
}
