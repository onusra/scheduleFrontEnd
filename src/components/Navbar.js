import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../global.css"

function Navbar() {
  return (
    <div className='nav-container'>
        <nav>
            <ul>
              <li className='li'><Link to="/">Home</Link></li>
              <li className='li' ><Link to='/register'>Register</Link></li>
              <li className='li' ><Link to="/login">Login</Link></li>
              
              </ul>   
        </nav>
        <Outlet/>
    </div>                                                                        
  )
}

export default Navbar 