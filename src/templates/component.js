const rcfp = ({ componentName }) => `import React from 'react'
import PropTypes from 'prop-types'

const ${componentName} = ({ children }) => (
  <div>
		{children}
	</div>
)

${componentName}.propTypes = {
  children: PropTypes.any
}

export default ${componentName}

`

const index = ({ componentName }) => `import ${componentName} from './${componentName}'
import styles from './styles'

export {
  ${componentName},
  styles
}
`

const styles = () => `export default {

}
`

const test = ({ componentName }) => `
`

module.exports = {
  rcfp,
  index,
  styles,
  test
}
