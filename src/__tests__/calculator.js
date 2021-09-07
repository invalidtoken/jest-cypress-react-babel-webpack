import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from 'calculator'

test('renders a calculator', () => {
  render(<Calculator />)
})

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/)) // enulating a click event
  expect(clearButton).toHaveTextContent('C') // here we are using @testing-library/jest-dom matcher instead of jest matchers

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
