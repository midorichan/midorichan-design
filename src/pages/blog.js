import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulPost.edges
  return (
  <Layout>
     <div className="Hero">
      <div className="HeroGroup">
        <h1>Blog<span>.</span></h1>
        <p>When I was a kid, I read a lot<sup>*</sup>, and I wanted to be a writer and tell stories. Time has passed, and became a designer instead. Though I tell stories differently nowadays, I keep returning to the white, blank page.</p>
        <p><small><sup>*</sup>...and <a className="underlined Offset" href="https://www.goodreads.com/midorichan" title="Check out my profile in Goodreads">I still do!</a></small></p>
       <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
        </svg>         
      </div>
    </div>
    <div className="Wave">
    <div className="Headline">
          <h2>Recent Writing</h2>
          <div className="Underline"></div>
        </div>
        <div className="Content">
            {posts.map(({ node }) => {
                  const title = node.title || node.slug
                  return (
                      <div className="PostPreview" key={node.slug}>
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
        </div>
    </div>
    <svg width="100%" height="161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2560 107.25C2402 149.981 2347 161 2197 161C2047 161 1704.44 45.803 1406 45.803C1120 45.803 934 199.065 0 107.25V0L2560 0V107.25Z" fill="#EEEEEE" />
    </svg>
  </Layout>
)
}
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(limit: 25) {
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

