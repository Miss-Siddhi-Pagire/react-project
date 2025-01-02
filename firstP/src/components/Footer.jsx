import { Link } from 'react-router-dom'
import './Footer.css'
function Footer(){
    return(
        <>
            <footer>
                    <div className="footer-content">
                      <h3 className='footer-color-green'>Vrindavan Vihar Nursary</h3>
                      <p className='footer-color-green'>Your one-stop destination for all your plant needs. From seeds to saplings, we have it all!</p>
                    </div>
                    <div className="footer-bottom footer-color-green">
                      <p className='footer-color-green' >&copy; 2024 Green Thumb Nursery | Designed by @xyz</p>
                    </div>
                 
            </footer>
            
        </>
        
    )


}
export default Footer