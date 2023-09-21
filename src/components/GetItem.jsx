import PropTypes from 'prop-types'

export const GetItem = ({title,image,id}) => {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <p>{title}</p>
      
    </div>

  )
}

GetItem.propTypes = {
  title : PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}