import {Link}   from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <>
            <div className ="navbar">
                <img src="src\images\logoimg.jpg" alt="logoimg" className='navimg' />
                <p className='navele website-name'>Vrindavan Vihar</p>
                <p className='navele home-ele text-deco'><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link> </p>
                <p className='navele' ><Link to="/Explore"  style={{textDecoration:"none", color:"white"}}>Explore</Link> </p>
                <p className='navele'><Link to="/About" style={{textDecoration:"none", color:"white"}}>About Us</Link></p>
                <p className='navele'><Link to="/Contact"style={{textDecoration:"none", color:"white"}}>Contact</Link></p>
                <p className='navele'><Link to="/Blog" style={{textDecoration:"none", color:"white"}}>Blog</Link></p>
                
            </div>
        </>
    )
}
export default Navbar