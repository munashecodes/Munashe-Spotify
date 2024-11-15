import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import TopArtist from "./components/TopArtist"



 function App() {

  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/topArtist" Component={TopArtist}/>

        </Routes>
      </BrowserRouter>
  )
  
}

export default App

