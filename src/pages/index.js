import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Button from '../components/Button';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Hola. Hello. こんにちは。</h2>
        <h1>I am Paula Alonso Ishihara<span>.</span></h1>
        <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        Currently based in Mar del Plata, Argentina.</p>
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V172L0 172V25.9222Z" fill="#EEEEEE"/>
        </svg>
      </div>
    </div>
    <div className="Work">
      <div className="Headline">
        <h2>Recent Work</h2>
        <div className="Underline"></div>
      </div>
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
          title="Revamping the football experience"
          text="Wannaplay"
          image={require('../images/wallpaper2.jpg')}/>
      </div>
    </div>
    <svg width="100%" height="200" viewBox="0 0 100% 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2560 146.25C2402 188.981 2347 200 2197 200C2047 200 1704.44 84.803 1406 84.803C1120 84.803 934 238.065 0 146.25V0L2560 0.000106812V146.25Z" fill="#EEEEEE"/>
    </svg>

    <div className="Headline">
      <h2>I’ve worked on projects for</h2>
      <div className="Underline"></div>
    </div>
    <div className="Content">
    <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        Currently based in Mar del Plata, Argentina.</p>
        <Button to="/" 
                text="Contact me" />
    </div>
  </Layout>
)

export default IndexPage
