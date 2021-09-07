import React from 'react'
import {render} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  render(<AutoScalingText />)

  // you can use const {debug} = render(<Component />)
  // to see the structure of the node
})
