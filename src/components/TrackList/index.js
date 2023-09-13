import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const TrackList = props => {
  const {trackList, onDelete} = props
  const {imageUrl, id, name, genre, duration} = trackList

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list">
      <div className="wrap-track-text">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="wrap-name-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="wrap-end">
        <p className="time">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
          className="delete-btn"
        >
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackList
