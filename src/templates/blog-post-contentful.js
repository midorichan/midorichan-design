import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        
        <div className="PostHeadline">
        <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
                </svg>
        <Img fluid={post.featuredImage.fluid} />
    
        </div>
        <div className="Hero">
          <div className="HeroGroup">
              <h1>{post.title}</h1>
              <h2>{post.subtitle}</h2>
              <p>{post.createdAt}</p>
              <svg width="100%" height="137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25.9222C277 84.6264 433 65.7704 720 25.9222C934.818 -3.90394 1214.06 -5.23943 1442 8.07019C2079 45.2658 2208 63.5339 2560 25.9223V137H0V25.9222Z" fill="#EEEEEE"/>
                </svg>         
          </div>
      </div>

        <div className="Content" dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
      
        <ul>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      subtitle
      author
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      createdAt(formatString: "MMMM DD, YYYY")
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
