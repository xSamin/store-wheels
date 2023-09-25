import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"


export  const Navbar = () =>{
    return (   
    <div className="navbar">
        <div className="links">
            <Link to= "/"className='links'> Shop </Link>
            
            <Link to="/cart" className='links'> 
            <ShoppingCart size={32}/> 
            </Link>

        </div>
        
    </div>
    )
}


