import { Track } from "../interfaces/TrackDto"
import spotify from "../assets/spotify_icon_black.png"

interface Props{
    track: Track
    number: number
}

const TrackTable = ({track, number}: Props) => {
    const content = track.artists.map((artist) => {
          return(
              
                artist.name + ", "
              
          )
    })
  return (
    <tr key={number}>
        <td style={{ display: 'flex', alignItems: 'center' }}>
            <strong> {number + 1 + "." + " "}</strong>
            
            <img src={track.album.images[1].url} alt={track.name} style={{ width: '50px', height: '50px', margin: '0 5px' }} />
            {track.name}
        </td>
        <td>
            {
                content
            }
            
        </td>
        <td>
        <a href={track.uri} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '5px' }}>
                <img 
                    src={spotify}
                    alt={`Open ${track.name} on Spotify`} 
                    title="Open this track on Spotify" 
                    style={{ width: '24px', height: '24px' }}
                />
            </a>
            
            
        </td>
    </tr>
  )
}

export default TrackTable