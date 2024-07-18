//import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
//--------------------------------------------------import dependencies
import Home from './components/Home'
import Navbar from './components/Navbar'
import Workout from './components/Workout'
//----------------------------------------------import components
import './App.css'

function App() {

  return (
    <>
    <Router>
      <div className='app'>
      <Navbar/>
      <Routes>
        <Route exactpath ="/" Component={<Home/>}></Route>
        <Route exactpath = "/workout" Component={<Workout/>}></Route>

      </Routes>

      </div>

    </Router>
    </>
  )
}

export default App
