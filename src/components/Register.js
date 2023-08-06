import React from 'react'
import "../global.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values,[name]: value}))
  }
  
  
  

  const handleSubimit = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios.post("http://localhost:8080", inputs).then(
      alert("Post created")
    )
   
    /*useEffect(()=>{
      axios.post("http://localhost:8080", inputs).then(
        alert("Post created")
      )
    },[inputs])*/
  }

   
  return (

<div className='container'> 
   
    <div className="form">
      <h1>Join Us Today</h1>
      <form onSubmit={handleSubimit} >
        <input onChange={handleChange} name='firstName' value={inputs.firstName || ""} type="text" className='input' placeholder='first name'></input>
        <input onChange={handleChange} name='lastName' value={inputs.lastName || ""} type='text' className='input' placeholder='last name'></input>
        <input onChange={handleChange} type='email' name='email' value={inputs.email} className='input' placeholder='johndoe@gmail.com'></input>
        <input onChange={handleChange} type='text' name='password' value={inputs.password} className='input' placeholder='password'></input>
        <input onChange={handleChange} type='number' name='age' value={inputs.age} className='input' placeholder='age'></input>
        <button className='btn' type='submit'>Sign Up</button>
        <p className='p'>Already have an account ? : <Link to ="/login">sign in</Link></p>
      </form>
     
    </div>
    <Footer/>
    </div>
  )
}

export default Register