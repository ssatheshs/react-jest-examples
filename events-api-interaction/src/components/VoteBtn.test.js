import { screen, render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import Vote from './Vote'
import VoteBtn from './VoteBtn'
import thumbsUp from '../images/thumbs-up.svg'

test('increase total likes by one using fireEvent', () => {
    render( <Vote totalGlobalLikes={ 8 } /> )

    expect( screen.getByText(/8/i) ).toBeInTheDocument()    
    fireEvent.click(screen.getByRole('button', { name:/thumbs up/i }))
    expect( screen.getByText(/9/i)).toBeInTheDocument()

    expect( screen.getByRole( 'button', { name: /thumbs up/i})).toHaveStyle('background: green')
    
}) 

test('increase total likes by one using user_event', () => {
    render( <Vote totalGlobalLikes={ 8 } /> )

    expect( screen.getByText(/8/i) ).toBeInTheDocument()    
    user.click(screen.getByRole('button', { name:/thumbs up/i }))
    expect( screen.getByText(/9/i)).toBeInTheDocument()

    expect( screen.getByRole( 'button', { name: /thumbs up/i})).toHaveStyle('background: green')
    
})

test('A user can only vote once', () => {
    render( <Vote totalGlobalLikes={10} />)
    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs Up/i})
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs Down/i})

    expect(screen.getByText(/10/i)).toBeInTheDocument()
    user.click(thumbsUpBtn)
    user.click(thumbsUpBtn)
    expect( screen.getByText(/11/i)).toBeInTheDocument()
    user.click(thumbsDownBtn)
    expect( screen.getByText(/11/i)).toBeInTheDocument()
})

test('decrease total likes by one using user_event', () => {
    render( <Vote totalGlobalLikes={ 8 } /> )

    expect( screen.getByText(/8/i) ).toBeInTheDocument()    
    user.click(screen.getByRole('button', { name:/thumbs down/i }))
    expect( screen.getByText(/7/i)).toBeInTheDocument()

    expect( screen.getByRole( 'button', { name: /thumbs down/i})).toHaveStyle('background: red')
    
})


test('invokes handleVote using test double', () => {
    const mockHandleVote = jest.fn()

    render(
        <VoteBtn
            handleVote={ mockHandleVote }
            hasVoted={false}
            imgSrc={ thumbsUp}
            altText="vote like"
        />
    )

    user.click(screen.getByRole('button',{ name: /vote like/i}))
    expect(mockHandleVote).toHaveBeenCalled()
    expect(mockHandleVote).toHaveBeenCalledTimes(1)
})