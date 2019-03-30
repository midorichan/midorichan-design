import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Button from '../components/Button';
import Emoji from '../components/Emoji';



class IndexPage extends React.Component {

  render() {
  const { data } = this.props
  const posts = data.allContentfulPost.edges
  
  return (
      <Layout>
        <div className="Hero">
          <div className="HeroGroup">
            <h2>Hola. Hello. こんにちは。</h2>
            <h1>I am Paula Alonso Ishihara<span>.</span></h1>
            <p>A designer passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
            Currently based in <a className="underlined Offset" href="https://www.google.com/destination?q=mar+del+plata&newwindow=1&sa=X&site=search&output=search&dest_mid=/m/01psv5&ved=2ahUKEwiQ7Or_z6PhAhVUDrkGHdyeAiEQri4wInoECBQQAw" title="Mar del Plata, Buenos Aires, Argentina"><Emoji symbol="📍" label="Location Pushpin" />Mar del Plata, Argentina</a>.</p>
            <div className='icon-scroll'></div>
            <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
            </svg>
          </div>
        </div>
        <div className="Wave">
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
              <Button to="/work" 
                    text="See More" />
          </div>
        </div>
        <svg width="100%" height="161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#EEEEEE" />
        </svg>

        <div className="Headline">
          <h2>Recent Writing</h2>
          <div className="Underline"></div>
        </div>
        <div className="Content">
            {posts.map(({ node }) => {
                  const title = node.title || node.slug
                  return (
                      <div key={node.slug}>
                        <h3>
                          <Link to={node.slug}>
                            {title}
                          </Link>
                        </h3>
                        <small>{node.createdAt}</small>
                        <p>{node.subtitle}</p>
                      </div>
                  )
                })}
          <Button to="/blog" 
                    text="Read More" />
        </div>
        <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#eeeeee"/>
        </svg>
        <div className="Wave">
            <div className="Headline">
              <h2>Nice to meet you.</h2>
              <div className="Underline"></div>
            </div>
            <div className="Content">
            <p>Shores of the cosmic ocean as a patch of light consciousness citizens of distant epochs kindling the energy hidden in matter paroxysm of global death? Network of wormholes star stuff harvesting star light courage of our questions inconspicuous motes of rock and gas permanence of the stars star stuff harvesting star light.</p>
            <p>Email me at <a href="mailto:someone@site.com">someone@site.com</a> or contact me through the links below.</p>
            </div>
        </div>
            <svg width="100%" height="161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#eeeeee" />
        </svg>
      </Layout>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          slug
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`