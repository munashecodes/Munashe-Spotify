import { useState, useEffect } from "react";
import { redirectToAuthCodeFlow, getAccessToken, fetchProfile } from "../auth/SpotifyAuth";
import { SpotifyUser } from "../interfaces/SpotifyUser";
import Header from "./Header";
import TopArtist from "./TopArtist";
import TopTrack from "./TopTrack";


const Home = () => {
  
    
  const [currentPage, setCurrentPage] = useState('')
  const [profile, setProfile] = useState<SpotifyUser | null>(null);
  const clientId = "4ff51706617149c6afd724bac106e9ce";
  const clientSecret = "3d509594fd1346b1bf182f58800dc07b";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const changePage = (page : string) => {
    setCurrentPage(page)
  }
  
  useEffect(() => {
    const fetchAccessTokenAndProfile = async () => {
      try {
        if (!code) {
          redirectToAuthCodeFlow(clientId, clientSecret);
        } else {
          const tok = localStorage.getItem("access_token")
          if(tok === null){
            const token = await getAccessToken(clientId, code);
            const userProfile = await fetchProfile(token);
            setProfile(userProfile);
          } else{
            const userProfile = await fetchProfile(tok);
            
            setProfile(userProfile);

          }
          

          
          
        }
      } catch (error) {
        console.error('Error fetching access token and profile:', error);
      }
    };

    fetchAccessTokenAndProfile();
  }, [clientId, code]);


  return (
    <>
    <Header profile={profile!} page={changePage}/>

    {currentPage === 'topArtist' && <TopArtist/>}
    {currentPage === 'topTrack' && <TopTrack/>}


      
    </>
  )
  
}

export default Home