const fs = require('fs')
const { exec } = require('child_process')

const handleIOError = err => {
  if (err) throw err
}

const mkdir = dir =>
  exec('mkdir -p ' + dir, handleIOError)

const touch = fileName =>
  exec(`touch ${fileName}`, handleIOError)

const echo = (path, content) =>
  fs.writeFileSync(`./${path}`, content, handleIOError)

const createFile = (path, content) => {
  touch(path)
  echo(path, content)
}

module.exports = {
  mkdir,
  touch,
  echo,
  createFile
}