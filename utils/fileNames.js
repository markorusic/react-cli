const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const componentNameFromPath = dirPath => {
  if (!dirPath) {
    throw Error('Invalid directory path')
  }
  return capitalize(dirPath.split('/').reverse()[0])
}

module.exports = {
  componentNameFromPath
}
