import { Link } from 'react-router-dom'
import './Home.css'
function Home(){
    return(
        <>

            <div className='home-div'> 
                    <img src='src\images\flat-illustration-people-taking-care-plants.png' className='homeimg'/>
                    <p className='home-text'>
                
                    <span className='home-text-1'>Joy in Every Corner of the Garden!</span><br/>
                    “Step into a green <span className='home-text-2'>vrindavan vihar!</span> From vibrant flowers to lush foliage, we have   everything to make your home a little more alive. Discover your perfect plant today!”
                    Find the perfect nursery plants for your garden by zone, sun exposure, height, color, and more!
                    <br/>
                    <button className='explore-btn'>Explore More</button>
                    </p>
                    
            </div>

        </>
        
    )


}
export default Home