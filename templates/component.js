const rcfp = ({ name }) => `import React from 'react'
import PropTypes from 'prop-types'

const ${name} = ({ children }) => (
  <div>
		{children}
	</div>
)

NavLink.propTypes = {
  children: PropTypes.any
}

export default ${name}

`

module.exports = {
  rcfp
}
