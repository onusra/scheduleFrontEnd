import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div  className='form-container  login' >
      <h1>Sign In</h1>
      <form>
        
        <input type='email' className='input' placeholder='johndoe@gmail.com'></input>
        <input type='text' className='input' placeholder='password'></input>
       
        <button className='btn' type='submit'>Sign In</button>
        <p className='p' >Dont have an account ? : <Link to ="/register">sign up</Link></p>
      </form>
    </div>
  )
}

export default Login