import React from 'react'

import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders a calculator display', () => {
  const {container} = render(<CalculatorDisplay value="200" />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="emotion-0"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          200
        </div>
      </div>
    </div>
  `)
})

test('renders FirstChild of container', () => {
  const {container} = render(<CalculatorDisplay value="200000" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        200,000
      </div>
    </div>
  `)
})
