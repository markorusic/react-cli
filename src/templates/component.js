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

const test = ({ componentName }) => `/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import ${componentName} from './${componentName}'

it('${componentName} renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<${componentName} />, div)
	ReactDOM.unmountComponentAtNode(div)
})
`

module.exports = {
  rcfp,
  index,
  styles,
  test
}
