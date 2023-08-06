import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [inputs, setInputs] = useState({});

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values,[name]: value}))
  }
  
  
  

  const handleSubimit = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios.post("http://localhost:8080/login", inputs).then(
      (responce)=> console.log(responce)
    )
   
    /*useEffect(()=>{
      axios.post("http://localhost:8080", inputs).then(
        alert("Post created")
      )
    },[inputs])*/
  }
  return (
    <div className='container' >
    <div  className='form  login' >
      <h1>Sign In</h1>
      <form onSubmit={handleSubimit}>
        
        <input onChange={handleChange} name='email' value={inputs.email || ""} type='email' className='input' placeholder='johndoe@gmail.com'></input>
        <input onChange={handleChange} name="password" value={inputs.password || ""} type='text' className='input' placeholder='password'></input>
       
        <button className='btn' type='submit'>Sign In</button>
        <p className='p' >Dont have an account ? : <Link to ="/register">sign up</Link></p>
      </form>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Login