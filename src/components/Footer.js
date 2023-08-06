import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' >
        <section>
            <article>
              <h1>About Us</h1>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged.
              </p>
            </article>
            <article>
                <h1>Site Map</h1>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </article>
            <article>
              <h1>Address</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially 
            unchanged.
            </p>
            </article>
        </section>
        
    </div>
  )
}

export default Footer