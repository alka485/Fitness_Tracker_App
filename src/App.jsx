//import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
//--------------------------------------------------import dependencies
import Home from './components/Home'
import Navbar from './components/Navbar'
import Workout from './components/Workout'
//----------------------------------------------import components
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
      <Navbar>
      <Routes>
        <Route exactpath ="/"  element={<Home/>}></Route>
        <Route exactpath = "/workout"  element={<Workout/>}></Route>
      </Routes>
      </Navbar>
      </div>
    </>
  )
}

export default App
