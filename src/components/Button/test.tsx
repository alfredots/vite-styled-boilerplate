import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('<Button/>', () => {
  it('should render a button', () => {
    const { container } = render(<Button />)
    expect(screen.getByRole('button', { name: /teste/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
