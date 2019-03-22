import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Button from '../components/Button';

const Blog = () => (
  <Layout>
     <div className="Hero">
      <div className="HeroGroup">
        <h1>Blog<span>.</span></h1>
        <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        Currently based in Mar del Plata, Argentina.</p>
        <Button to="/"
                text="Contact me"/>
      </div>
    </div>
  </Layout>
)

export default Blog
