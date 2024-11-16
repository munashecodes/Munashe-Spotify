import axios from "axios"
import { TopArtistDto } from "../interfaces/TopArtistDto"
import { Track } from "../interfaces/TrackDto"
import { getRefreshToken } from "../auth/SpotifyAuth"

const clientId = "4ff51706617149c6afd724bac106e9ce";

export const apiRequests = {
    getTopArtists: async (term: string) : Promise<TopArtistDto | undefined> => {
        const token = localStorage.getItem("access_token")
        const result = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${term}&limit=50`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(result.status === 401){
            await getRefreshToken(clientId);
            await apiRequests.getTopArtists(term)
        }else{
            return result.data

        }

        

    },

    getTopTracks: async (term: string) : Promise<Track[] | undefined> => {
        const token = localStorage.getItem("access_token")
        const result = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${term}&limit=50`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(result.status === 401){
            await getRefreshToken(clientId);
            await apiRequests.getTopTracks(term)
        }else{
            return result.data.items

        }


    }
}
