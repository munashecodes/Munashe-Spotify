import { ExternalUrls, Followers, Images } from "./SpotifyUser";

export interface Artist{
    external_urls?: ExternalUrls
    followers?: Followers
    genres?:  string[]
    href?: string
    id?: string
    images?: Images[]
    name?: string
    popularity?: number
    type?: string
    uri?: string
}