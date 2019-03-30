import React from 'react'
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <span>FIND ME ON</span>
      <a className="underlined Offset" href="https://dribbble.com/midorichan">Dribbble</a>
      <a className="underlined Offset" href="https://www.linkedin.com/in/palonso/">Linkedin</a>
      <a className="underlined Offset" href="https://twitter.com/midorichan">Twitter</a>
      <span>midorichan &copy; 2019</span>
    </div>
  </div>
)

export default Footer
