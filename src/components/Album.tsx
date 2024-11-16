import { useState } from "react"
import { AlbumDto } from "../interfaces/AlbumDto"


const Album = () => {
    const [albums, setAlbums] = useState<AlbumDto[]>([])
    
  return (
    <div>Album</div>
  )
}

export default Album