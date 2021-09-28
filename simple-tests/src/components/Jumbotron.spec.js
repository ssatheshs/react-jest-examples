import { render, screen } from '@testing-library/react'
import Jumbotron from './Jumbotron'


it('displays the heading', () => {
    render(<Jumbotron />)
    screen.getByText(/Welcome to our site!/i)
    screen.getByRole( 'heading', { 'name': /Welcome to our site!/i })
}) 

it( 'displays the heading', () => {
    render( <Jumbotron /> )
    expect(
        screen.getByRole( 'heading', { 'name': /Welcome to our site!/i })
    ).toBeInTheDocument()
})