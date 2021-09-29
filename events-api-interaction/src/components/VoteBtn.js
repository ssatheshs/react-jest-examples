import PropTypes from 'prop-types'

const VoteBtn = props => {
  return (
    <button onClick={props.handleVote}  id = { props.id } >
      <img src={props.imgSrc} alt={props.altText} />
    </button>
  )
}

VoteBtn.propTypes = {
  handleVote: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default VoteBtn