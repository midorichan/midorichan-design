import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Button from '../components/Button';

const Work = () => (
  <Layout>
     <div className="Hero">
      <div className="HeroGroup">
        <h1>Work<span>.</span></h1>
        <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        Currently based in Mar del Plata, Argentina.</p>
        <Button to="/"
                text="Contact me"/>
      </div>
    </div>
    <div className="Work">
      <h2>Recent Work</h2>
      <div className="CardGroup">
        <Card 
          title="Innovative Mobile Advertising for Luxury Brands"
          text="WSJ Revenue"
          image={require('../images/wallpaper2.jpg')}/>
        <Card 
          title="Dairy Modernization Project"
          text="Vas"
          image={require('../images/wallpaper2.jpg')}/>
        <Card 
          title="Investment Portfolio Management Made Easy"
          text="Deutsche Bank"
          image={require('../images/wallpaper2.jpg')}/>
        <Card 
          title="Divide and Conquer"
          text="Deutsche Bank"
          image={require('../images/wallpaper2.jpg')}/>
        <Card 
          title="Revamping the football experience"
          text="Wannaplay"
          image={require('../images/wallpaper2.jpg')}/>
      </div>
    </div>
  </Layout>
)

export default Work
