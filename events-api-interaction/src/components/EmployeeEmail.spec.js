import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import EmployeeEmail from './EmployeeEmail'

test('accept username and display to the screen', () => {
    render( <EmployeeEmail /> )
    const textBox = screen.getByRole('textbox', { name: /enter your name/i})
    user.type(textBox, 'Jane')
    expect( screen.getByText(/Jane@software-plus.com/i)).toBeInTheDocument()
})