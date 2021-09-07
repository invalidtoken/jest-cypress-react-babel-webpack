import React from 'react'
import {render as rtl} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import {dark} from 'themes'
import PropTypes from 'prop-types'

function render(ui, options) {
  function wrapper({children}) {
    return <ThemeProvider theme={dark}>{children}</ThemeProvider>
  }

  wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtl(ui, {wrapper, ...options})
}

render.propTypes = {
  ui: PropTypes.element,
}

export * from '@testing-library/react'
export {render}
