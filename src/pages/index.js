import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Hola. Hello. こんにちは。</h2>
        <h1>I am Paula Alonso Ishihara<span>.</span></h1>
        <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        Currently based in Mar del Plata, Argentina.</p>
        <Link to="/page-2/">Email me</Link>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
