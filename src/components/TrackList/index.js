import './index.css'

const TrackList = props => {
  const {trackList} = props
  const {imageUrl, name, genre, duration} = trackList
  return (
    <li>
      <div>
        <img src={imageUrl} alt="track" />
      </div>
    </li>
  )
}

export default TrackList
