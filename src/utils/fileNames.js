const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const componentNameFromPath = dirPath => {
  if (!dirPath) {
    throw Error('Invalid directory path')
  }
  return capitalize(dirPath.split('/').reverse()[0])
}

const ucLastDir = dirPath => {
  if (!dirPath) {
    throw Error('Invalid directory path')
  }
  return dirPath
    .split('/')
    .map((path, index, paths) => 
      (index === (paths.length - 1))
        ? capitalize(path)
        : path
    )
    .join('/')
}

module.exports = {
  componentNameFromPath,
  ucLastDir
}
