import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open Shopping Cart/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()
  })
})
