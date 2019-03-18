import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo.svg')} width="40" alt="Paula Alonso Ishihara logo"/></Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  </div>
)



export default Header
