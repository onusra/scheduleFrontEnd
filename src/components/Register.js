import React from 'react'
import "../global.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Register() {
  return (
    <div className='container'> 
    <div className="form">
      <h1>Join Us Today</h1>
      <form>
        <input type="text" className='input' placeholder='first name'></input>
        <input type='text' className='input' placeholder='last name'></input>
        <input type='email' className='input' placeholder='johndoe@gmail.com'></input>
        <input type='text' className='input' placeholder='password'></input>
        <input type='number' className='input' placeholder='age'></input>
        <button className='btn' type='submit'>Sign Up</button>
        <p className='p'>Already have an account ? : <Link to ="/login">sign in</Link></p>
      </form>
     
    </div>
    <Footer/>
    </div>
  )
}

export default Register