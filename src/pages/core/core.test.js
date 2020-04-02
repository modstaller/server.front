import { render } from '@testing-library/react'
import { Core } from './core.page'
import React from 'react'

test('renders learn react link', () => {
  const { getByText } = render(<Core/>)
  const linkElement = getByText(/Hello, World!/i)
  expect(linkElement).toBeInTheDocument()
})
