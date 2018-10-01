const colors = require('colors/safe')

module.exports = {
  success: message => console.log(
    colors.green(message)
  ),
  warning: message => console.log(
    colors.yellow(message)
  ),
  error: message => console.log(
    colors.red(message)
  )
}
