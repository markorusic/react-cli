const { componentNameFromPath, ucLastDir } = require('../../utils/fileNames')
const { mkdir, createJsFile } = require('../../utils/file')
const { rcfp, index, styles, test } = require('../../templates/component')

const generateComponent = ({ dirPath }) => {
  const componentName = componentNameFromPath(dirPath)
  const safeDirPath = ucLastDir(dirPath)

  // File contents
  const cmpContent = rcfp({ componentName })
  const testContent = test({ componentName })
  const indexContent = index({ componentName })
  const stylesContent = styles()
  
  // Component dir (Person)
  mkdir(safeDirPath)
  // Component file (Person.js)
  createJsFile(safeDirPath, componentName, cmpContent)
  // Test file (Person.test.js)
  createJsFile(safeDirPath, `${componentName}.test`, testContent)
  // Styles file (styles.js)
  createJsFile(safeDirPath, 'styles', stylesContent)
  // index file (index.js)
  createJsFile(safeDirPath, 'index', indexContent)
}

module.exports = generateComponent
