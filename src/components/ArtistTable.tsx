
import spotify from "../assets/spotify_icon_black.png"
import { Artist } from "../interfaces/ArtistDto"

interface Props{
    artist: Artist
    keyy: number
    
}

const ArtistTable = ({artist, keyy}: Props) => {

  return (
    
    
    
        <div key={artist.id} style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            width: '30%', 
            margin: '10px', 
            padding: '10px', 
            textAlign: 'center' 
        }}>
            <img 
                src={artist.images![0].url} 
                alt={artist.name} 
                title={artist.name} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Responsive image
            />
            <h3 style={{ margin: '10px 0 5px' }}>{keyy + 1 + ". " + artist.name}</h3>
            <a href={artist.uri} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '5px' }}>
                <img 
                    src={spotify}
                    alt={`Open ${artist.name} on Spotify`} 
                    title="Open this track on Spotify" 
                    style={{ width: '24px', height: '24px' }}
                />
            </a>
        </div>
    
    
  )
}

export default ArtistTable