import { SetStateAction, useEffect, useState } from "react"
import { TopArtistDto } from "../interfaces/TopArtistDto"
import { apiRequests } from "../api/Spotify"
import styled from "styled-components"
import ArtistTable from "./ArtistTable"
import BarLoader from "./BarLoader"

const TopArtist = () => {
    const [topArtists, setTopArtists] = useState<TopArtistDto | null>(null)
    const [term, setTerm] = useState('short_term')
    const [activeTab, setActiveTab] = useState('short_term');
    const [loading, setLoading] = useState(false);
    
    
    
    const handleTabClick = (tabName: SetStateAction<string>) => {
        console.log('Term', tabName)
        setTerm(tabName)
        setActiveTab(tabName);
    };

    useEffect(() => {
        const fetchTopArtist = async () => {
            setLoading(true);
            var res = await apiRequests.getTopArtists(term)
            setTopArtists(res!)
            setLoading(false)
        };

        
        fetchTopArtist();
    },[term])

    const content = topArtists?.items?.map((artist, index) =>
    {
        return(
           
                <ArtistTable  keyy={index} artist={artist}/>
            
                
            
  

        )
    }

    )

    
  return (
    <Container>
        <h1>Top Artists</h1>

        <SelectContainer>
                <StyledLabel htmlFor="Tab" className="sr-only">Tab</StyledLabel>
                <StyledSelect id="Tab" value={activeTab} onChange={(e) => handleTabClick(e.target.value)}>
                    <option value="short_term">4 weeks</option>
                    <option value="medium_term">6 months</option>
                    <option value="long_term">1 year</option>
                </StyledSelect>
            </SelectContainer>

        <NavContainer>
                <BorderBottom>
                    <Nav aria-label="Tabs">
                        <NavItem onClick={() => handleTabClick('short_term')} href="#" className={activeTab === 'short_term' ? 'active' : ''}>4 weeks</NavItem>
                        <NavItem onClick={() => handleTabClick('medium_term')} href="#" className={activeTab === 'medium_term' ? 'active' : ''}>6 months</NavItem>
                        <NavItem onClick={() => handleTabClick('long_term')} href="#" className={activeTab === 'long_term' ? 'active' : ''}>1 year</NavItem>
                    </Nav>
                </BorderBottom>
            </NavContainer>
        
           {
            loading ? <BarLoader/>
            :
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60vw', margin: 'auto' }}>
                        {content}
                    </div>
           }
                    
                
        
            
                
        

    </Container>
    
  )
}



const StyledLabel = styled.label`
    display: none; /* Visually hidden for screen readers */
`;

const StyledSelect = styled.select`
    width: 100%;
    border-radius: 0.375rem; /* rounded-md */
    border: 1px solid #d1d5db; /* border-gray-200 */
    padding: 0.5rem; /* Adjust padding as needed */
`;

const NavContainer = styled.div`
    display: none;

    @media (min-width: 640px) {
        display: block; /* Visible on larger screens */
    }
`;

const SelectContainer = styled.div`
    @media (min-width: 640px) {
        display: none; /* Hidden on larger screens */
    }
`;

const BorderBottom = styled.div`
    border-bottom: 1px solid #d1d5db; /* border-gray-200 */
`;

const Nav = styled.nav`
    display: flex;
    gap: 1.5rem; /* gap-6 */
`;

const NavItem = styled.a`
    display: inline-flex;
    align-items: center;
    border-bottom: 2px solid transparent; /* border-transparent */
    padding: 0.5rem 0.25rem; /* px-1 pb-4 */
    font-size: 0.875rem; /* text-sm */
    font-weight: 500; /* font-medium */
    color: #6b7280; /* text-gray-500 */
    transition: color 0.2s, border-color 0.2s;

    &:hover {
        border-color: #d1d5db; /* hover:border-gray-300 */
        color: #374151; /* hover:text-gray-700 */
    }

    &.active {
        border-color: #38bdf8; /* border-sky-500 */
        color: #0ea5e9; /* text-sky-600 */
    }
`;

const Container  = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 h1{
 font-size: 2rem;
 }
 table {
            width: 60vw;
            margin: auto; 
            border-collapse: collapse; 
        }
        th, td {
            padding: 12px; 
            text-align: left; 
        }
        th {
            background-color: #f2f2f2; 
        }
        
        table, th, td {
            border: none;
        }

`

export default TopArtist