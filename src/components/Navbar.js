import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../global.css"

function Navbar() {
  return (
    <div className='nav-container'>
        <nav>
            <ul>
              <li className='li'><Link to="/">Home</Link></li>
              <ll className='li' ><Link to='/register'>Register</Link></ll>
              <li className='li' ><Link to="/login">Login</Link></li>
              <li className='li' ><Link to="/feature">features</Link></li>
              </ul>   
        </nav>
        <Outlet/>
    </div>                                                                        
  )
}

export default Navbar 