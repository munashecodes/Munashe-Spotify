import axios from "axios"
import { TopArtistDto } from "../interfaces/TopArtistDto"
import { Track } from "../interfaces/TrackDto"

export const apiRequests = {
    getTopArtists: async (term: string) : Promise<TopArtistDto> => {
        const token = localStorage.getItem("access_token")
        const result = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${term}&limit=50`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result.data

    },

    getTopTracks: async (term: string) : Promise<Track[]> => {
        const token = localStorage.getItem("access_token")
        const result = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${term}&limit=50`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result.data.items

    }
}
