import { SpotifyUser } from "../interfaces/SpotifyUser"
import styled from "styled-components"
import spotify from "../assets/spotify_icon_black.png"
import { OverlayPanel } from 'primereact/overlaypanel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useRef } from "react";


interface Props {
    profile:  SpotifyUser
    page: (page: string) => void
}
const Header = ({profile, page}: Props) => {
  const op = useRef<OverlayPanel | null>(null);
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
                <li><a href="" onClick={(event) => handleLinkClick(event, "album")}>Albums</a></li>
                <li><a href="" onClick={(event) => handleLinkClick(event, "topTrack")}>Top Tracks</a></li>
            </ul>
        </nav>

        <Profile>
            <h3>{profile?.display_name}</h3>
        <img src={profile?.images[1].url} alt="" onClick={(e) => op.current?.toggle(e)} />
        <OverlayPanel ref={op} style={{ width: '200px', borderRadius: '10px',  backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        
          <StyledList>
            <StyledListItem>
              <StyledLink  onClick={(event) => handleLinkClick(event, "topTrack")}>
                Top Tracks
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink onClick={(event) => handleLinkClick(event, "topArtist")}>
                Top Artists
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                Logout
              </StyledLink>
            </StyledListItem>
          </StyledList>
      </OverlayPanel>

        </Profile>
        

    </Head>
  )
}



const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 0.5rem 0;
`;

const StyledLink = styled.a`
  display: block;
  color: grey;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0f7fa; /* Darker shade for hover effect */
  }
`;


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