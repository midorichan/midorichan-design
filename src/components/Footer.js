import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <a className="underlined Offset" href="https://dribbble.com/midorichan">Dribbble</a>
      <a className="underlined Offset" href="https://www.linkedin.com/in/palonso/">Linkedin</a>
      <a className="underlined Offset" href="https://twitter.com/midorichan">Twitter</a>
      <span>midorichan &copy; 2019</span>
    </div>
  </div>
)

export default Footer