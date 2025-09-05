import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container">
        <div className="nav">
            <Link to="/home">Home</Link>
            <Link to="/card">Card</Link>
            
        </div>
    </div>
  )
}

export default Nav
