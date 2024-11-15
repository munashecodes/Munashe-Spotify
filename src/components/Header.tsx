import { SpotifyUser } from "../interfaces/SpotifyUser"
import styled from "styled-components"
import spotify from "../assets/spotify_icon_black.png"

interface Props {
    profile:  SpotifyUser
    page: (page: string) => void
}
const Header = ({profile, page}: Props) => {
    const handleLinkClick = (event : any, pg: string) => {
        event.preventDefault(); 
        console.log('Link clicked');
        page(pg)
    };
  return (
    <Head>
        <Logo>
        <img  src={spotify} title="Open this track on Spotify"></img>
        <h2>Munashe Spotify</h2>

        </Logo>
        
        <nav>
            <ul>
                <li><a href="" onClick={(event) => handleLinkClick(event, "topArtist")}>Top Artist</a></li>
                <li><a href="" onClick={(event) => handleLinkClick(event, "topTrack")}>Top Tracks</a></li>
            </ul>
        </nav>

        <Profile>
            <h3>{profile?.display_name}</h3>
        <img src={profile?.images[1].url} alt="" />

        </Profile>
        

    </Head>
  )
}

const Head = styled.div`
    max-width: 100vw;
    margin: 0;
    height: 5rem;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    img{
      height: 50px;
      border-radius: 40px;
    }
    nav ul{
      display: flex;
      gap: 1rem;
    }
    nav ul li{
      list-style: none;
      
    }
    a{
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 400;
      color: black;
      
    }
    a:hover{
    background-color: #007BFF;
    color: white
    }

`
const Profile = styled.div`
margin: 0;
padding: 0;
display: flex;
align-items: center;
gap: 1rem;

`

const Logo = styled.div`
padding:0;
margin 0;
display: flex;
align-items: center;
gap: 1rem;


`

export default Header