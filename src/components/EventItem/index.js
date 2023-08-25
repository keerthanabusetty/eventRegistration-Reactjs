// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImgClassName = isActive ? 'active-event-img' : 'event-img'

  const onClickEvent = () => setActiveEventId(id)

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImgClassName} />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
