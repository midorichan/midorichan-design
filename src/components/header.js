import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <nav>
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo.svg')} width="40" alt="Paula Alonso Ishihara logo"/></Link>
      <Link className="underlined Offset" to="/work">Work</Link>
      <Link className="underlined Offset" to="/about">About</Link>
      <Link className="underlined Offset" to="/blog">Blog</Link>
    </div>
  </div>
  </nav>
)

export default Header
