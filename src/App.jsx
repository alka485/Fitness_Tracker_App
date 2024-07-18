/* eslint-disable no-unused-vars */
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
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/workout"  element={<Workout/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
