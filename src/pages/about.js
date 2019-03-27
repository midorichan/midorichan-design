import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Button from '../components/Button';

const About = () => (
  <Layout>
     <div className="Hero">
      <div className="HeroGroup">
        <h1>About Me<span>.</span></h1>
        <p>Midorichan is my nickname. I was named Midori「緑、みどり」 by my japanese grandparents, its meaning is: green. Over the years it has become part of my identity and my heritage.</p>
        <div className="Avatar">
          <img src={require('../images/paula-sepia.png')} width="300" alt="Paula Photo"/>
        </div>
        <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
        </svg>  
      </div>
    </div>
    <div className="Wave">
      <div className="Headline">
        <h2>All you need to know</h2>
        <div className="Underline"></div>
      </div>
      <div className="Content">
        <p>My name is Paula Alonso Ishihara and I'm an experience designer. I've been working in the tech industry for more than 10 years, and around half of that time I've been designing.</p>
        <p>I studied System Engineering early in my career, and then switched to Graphic Design, lured by the creativity and the impact that visual can have on people's everyday life. But I couldn't stop there: I have always been insatiably curious, with a thirst for improvement for practically everything I found in my way, so when I came across experience design I knew it was the right job for me.</p>
        <p>Before becoming a UX designer, I worked very closely with people (as a tech support rep), and as a QA Analyst. This background has helped me to understand people and their frustrations, to become a better listener, to empathize, and to want to channel all my energy towards making the experience count in the design of any product.</p>
        <p>My past in sys engineering, and then in design, has given me a great mix to base my UX career on, and a solid foundation to become a full-stack designer.</p>
        <p>You can find me online pretty much everywhere as midorichan (unless taken 😭), but here are some shortcuts:</p>
        <Button to="https://dribbble.com/midorichan" 
                  text="Contact me" />
      </div>
    </div>
    <svg width="100%" height="161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#EEEEEE" />
    </svg>
  </Layout>
)

export default About
