import { Artist } from "./ArtistDto";
import { ExternalUrls, Images } from "./SpotifyUser";

export interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls
    href: string;
    id: string;
    images: Images[]
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
    artists: Artist[];
    is_playable: boolean;
  }
  

  
  