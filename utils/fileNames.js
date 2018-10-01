const fullPath = dirPath => fileName => `${dirPath}/${fileName}`

const componentName = name => `${name}.js`

const testName = name => `${name}.test.js`

module.exports = {
  fullPath,
  componentName,
  testName
}
