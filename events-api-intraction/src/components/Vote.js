import PropTypes from 'prop-types'
import * as React from 'react'
import thumbsDown from '../images/thumbs-down.svg'
import thumbsUp from '../images/thumbs-up.svg'
import VoteBtn from './VoteBtn'

const Vote = ({ totalGlobalLikes }) => {
  const likeReducer = (state, action) => {
    switch (action.type) {
      case 'LIKE':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          clickedLike: true,
          hasVoted: true
        }
      case 'DISLIKE':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          clickedDislike: true,
          hasVoted: true
        }
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(likeReducer, {
    totalLikes: totalGlobalLikes,
    hasVoted: false
  })

  const { totalLikes, hasVoted, clickedLike, clickedDislike } = state
  const handleVoteLike = () => dispatch({ type: 'LIKE' })
  const handleVoteDislike = () => dispatch({ type: 'DISLIKE' })

  return (
    <div className="h1">
      <h5>Note: You are not allowed to change your vote once selected!</h5>
      <button
        onClick={handleVoteLike}
        disabled={hasVoted}
        style={clickedLike ? { background: 'green' } : null}
      >
        <img src={thumbsUp} alt="thumbs up" />
      </button>
      <div>{totalLikes}</div>
      <button
        onClick={handleVoteDislike}
        disabled={hasVoted}
        style={clickedDislike ? { background: 'red' } : null}
      >
        <img src={thumbsDown} alt="thumbs down" />
      </button>
    
    </div>
  )
}

Vote.propTypes = {
  totalGlobalLikes: PropTypes.number.isRequired
}

export default Vote