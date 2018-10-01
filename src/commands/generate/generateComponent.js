const log = require('../../utils/log')
const { componentNameFromPath, ucLastDir } = require('../../utils/fileNames')
const { mkdir, createJsFile, exists } = require('../../utils/file')
const { rcfp, index, styles, test } = require('../../templates/component')

const generateComponent = ({ dirPath }) => {
  const componentName = componentNameFromPath(dirPath)
  const safeDirPath = ucLastDir(dirPath)
  
  if (exists(safeDirPath)) {
    log.error(`Directory ${safeDirPath} already exists!`)
    return
  }

  // File contents
  const cmpContent = rcfp({ componentName })
  const testContent = test({ componentName })
  const indexContent = index({ componentName })
  const stylesContent = styles()

  // Component dir (Example)
  mkdir(safeDirPath)
  log.success(`Created ${safeDirPath} directory`)
  // Component file (Example.js)
  createJsFile(safeDirPath, componentName, cmpContent)
  log.success(`Created ${componentName} component`)
  // Styles file (styles.js)
  createJsFile(safeDirPath, 'styles', stylesContent)
  log.success(`Created styles for ${componentName} component`)
  // Test file (Example.test.js)
  createJsFile(safeDirPath, `${componentName}.test`, testContent)
  log.success(`Created unit test for ${componentName} component`)
  // index file (index.js)
  createJsFile(safeDirPath, 'index', indexContent)
  log.success(`Created index file for ${componentName} component`)
}

module.exports = generateComponent
