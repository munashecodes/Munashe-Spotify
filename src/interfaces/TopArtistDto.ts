import { Artist } from "./ArtistDto"

export interface TopArtistDto{
    href?: string
    limit?: number
    next?: string
    offset: number
    previous?: any
    total?: number
    items?: Artist[]
}