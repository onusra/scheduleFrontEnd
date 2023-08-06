import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Register from './Register'
import Login from "./Login"
import Features from "./Features";
import "../global.css"

const Pages = () => {
  return (
    <div className='page-container' >
      <Routes>
        
          <Route path="/" element = {<Navbar/>}>

            <Route index element = {<Home/>} ></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/feature' element={<Features/>}></Route>
          </Route>
        
      </Routes>
    </div>
  )
}

export default Pages