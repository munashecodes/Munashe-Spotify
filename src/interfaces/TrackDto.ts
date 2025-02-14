import { AlbumDto } from "./AlbumDto";
import { Artist } from "./ArtistDto";
import { ExternalUrls } from "./SpotifyUser";

export interface Track {
    album: AlbumDto;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: ExternalUrls 
    href: string;
    id: string;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  }