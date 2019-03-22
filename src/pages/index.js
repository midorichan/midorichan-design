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
        <svg width="100%" height="137" viewBox="0 0 100% 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
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
    <svg width="100%" height="161" viewBox="0 0 100% 161" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#EEEEEE"/>
</svg>


    <div className="Headline">
      <h2>I’ve worked on projects for</h2>
      <div className="Underline"></div>
    </div>
    <div className="Content">
      <p>Shores of the cosmic ocean as a patch of light consciousness citizens of distant epochs kindling the energy hidden in matter paroxysm of global death? Network of wormholes star stuff harvesting star light courage of our questions inconspicuous motes of rock and gas permanence of the stars star stuff harvesting star light. Vanquish the impossible not a sunrise but a galaxyrise bits of moving fluff descended from astronomers not a sunrise but a galaxyrise not a sunrise but a galaxyrise.</p>
      <p>Made in the interiors of collapsing stars circumnavigated <Link to="/">Drake Equation</Link> cosmos worldlets explorations. Bits of moving fluff hundreds of thousands vastness is bearable only through love not a sunrise but a galaxyrise hydrogen atoms hundreds of thousands? Bits of moving fluff gathered by gravity great turbulent clouds bits of moving fluff muse about great turbulent clouds. Hundreds of thousands a very small stage in a vast cosmic arena vastness is bearable only through love dream of the mind's eye descended from astronomers the ash of stellar alchemy and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
      <Button to="/" 
                text="Contact me" />
    </div>
  </Layout>
)

export default IndexPage