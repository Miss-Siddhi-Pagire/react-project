import { BrowserRouter,Routes,Route } from "react-router-dom"
import Explore from "./components/Explore"
import Contact from "./components/Contact"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Blog } from "./components/Blog"


function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Explore" element={<Explore/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/> 
            <Route path="/Blog" element={<Blog/>}/>    
          </Routes>
        <Footer/>
      </BrowserRouter>
      
      
      
    </>
    
  )
}
export default App