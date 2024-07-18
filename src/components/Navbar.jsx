/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to="/workout">Workout</Link>

    </nav>
  )
}

export default Navbar