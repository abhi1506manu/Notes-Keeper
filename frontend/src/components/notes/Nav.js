import React from 'react'
import { Link } from 'react-router-dom' 
// import logo from './NoteDown-1.png'
import './nav.css'

function Nav({setIsLogin}) {

const logoutSubmit = ()=>{
  localStorage.clear()
  setIsLogin(false)
}

  return (
    <header>
      <div className="logo">
        {/* <img src={logo} alt="logo" /> */}
        <h2><Link to="/">Note Down</Link></h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">CreatNote</Link></li>
        <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
      </ul>
    </header>
  )
}

export default Nav