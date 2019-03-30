import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <h1>{post.title}</h1>
        <p>{post.createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <hr/>
      
        <ul
         
        >
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
      createdAt(formatString: "MMMM DD, YYYY")
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
