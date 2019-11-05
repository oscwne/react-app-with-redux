import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const activeStyle = { color: '#F15B2A' }
  return (
    <nav className="my-3">
      <NavLink to="/" exact className="mx-2" activeStyle={activeStyle}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/courses" exact className="mx-2" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {' | '}
      <NavLink to="/about" exact className="mx-2" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  )
}

export default Header
