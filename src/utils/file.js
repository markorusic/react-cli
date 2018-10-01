const fs = require('fs')
const { exec } = require('child_process')

const handleIOError = err => {
  if (err) throw err
}

const mkdir = dir =>
  exec(`mkdir -p ${dir}`, handleIOError)

const touch = fileName =>
  exec(`touch ${fileName}`, handleIOError)

const echo = (path, content) =>
  fs.writeFileSync(`${path}`, content, handleIOError)

const createFile = (path, content) => {
  const absolutePath = [process.cwd(), path].join('/')
  touch(absolutePath)
  echo(absolutePath, content)
}

const createJsFile = (dir, name, content) =>
  createFile(`${dir}/${name}.js`, content)

module.exports = {
  mkdir,
  touch,
  echo,
  createFile,
  createJsFile
}
