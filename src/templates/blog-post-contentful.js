import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import './blog-post-contentful.css'

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

      <div className="BlogHero">
          <div className="BlogGroup">
          <h1>{post.title}</h1>
              <h2>{post.subtitle}</h2>
              <small>{post.createdAt}</small>      
          </div>
          <svg width="100%" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H2560V78.4219C2283 112.392 2127 101.481 1840 78.4219C1625.18 61.1626 1345.94 60.3898 1118 68.0916C1023.03 71.3007 939.345 74.2663 864.533 76.9176C437.576 92.0488 299.518 96.9415 0 78.422V0Z" fill="white"/>
          </svg>
      </div>


        <div className="PostHeadline">
        
        <Img fluid={post.featuredImage.fluid} />
        <svg width="100%" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.9213C277 61.7711 433 48.0076 720 18.9213C934.818 -2.84959 1214.06 -3.8244 1442 5.89065C2079 33.0407 2208 46.3751 2560 18.9214V100H0V18.9213Z" fill="#FFFFFF"/>
</svg>

        </div>



        <div className="Content" dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
      <div className="PostNav">
        <ul>
        <li>
            {next && (
              <Link to={next.slug} rel="next">
              ← {next.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                {previous.title} →
              </Link>
            )}
          </li>
        </ul>
       </div>
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
