import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails

  return (
    <li className="list-item-cont">
      <img className="img" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
