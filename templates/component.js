const rcfp = ({ name }) => `import React from 'react'
import PropTypes from 'prop-types'

const ${name} = ({ children }) => (
  <div>
		{children}
	</div>
)

${name}.propTypes = {
  children: PropTypes.any
}

export default ${name}

`

const index = ({ name }) => `import ${name} from './${name}'
import styles from './styles'

export {
  ${name},
  styles
}
`

const styles = () => `export default {

}
`

const test = ({ name }) => `
`

module.exports = {
  rcfp,
  index,
  styles,
  test
}
