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
       <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
        </svg>         
      </div>
    </div>
    <div className="Wave">
      <div className="Headline">
        <h2>Recent Writings</h2>
        <div className="Underline"></div>
      </div>
      <div className="Content">
        <p>Shores of the cosmic ocean as a patch of light consciousness citizens of distant epochs kindling the energy hidden in matter paroxysm of global death? Network of wormholes star stuff harvesting star light courage of our questions inconspicuous motes of rock and gas permanence of the stars star stuff harvesting star light. Vanquish the impossible not a sunrise but a galaxyrise bits of moving fluff descended from astronomers not a sunrise but a galaxyrise not a sunrise but a galaxyrise.</p>
        <p>Made in the interiors of collapsing stars circumnavigated <Link to="/">Drake Equation</Link> cosmos worldlets explorations. Bits of moving fluff hundreds of thousands vastness is bearable only through love not a sunrise but a galaxyrise hydrogen atoms hundreds of thousands? Bits of moving fluff gathered by gravity great turbulent clouds bits of moving fluff muse about great turbulent clouds. Hundreds of thousands a very small stage in a vast cosmic arena vastness is bearable only through love dream of the mind's eye descended from astronomers the ash of stellar alchemy and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        <Button to="/" 
                  text="Contact me" />
      </div>
    </div>
    <svg width="100%" height="161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#EEEEEE" />
    </svg>
  </Layout>
)

export default Blog
