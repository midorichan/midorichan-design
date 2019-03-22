import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link';

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My name is Paula Alonso Ishihara and I am a UX Designer.' },
            { name: 'keywords', content: 'midorichan, ux, designer, ux designer, ishihara' },
            { name: 'apple-mobile-web-app-title', content: 'midorichan.design' },
            { name: 'application-name', content: 'midorichan.design' },
            { name: 'msapplication-TileColor', content: '#c70039' },
            { name: 'theme-color', content: '#c70039' },
          ]}
        >
        <link
              rel="icon"
              sizes="32x32"
              href={withPrefix('/favicons/favicon-32x32.png')}
            />
         <link
              rel="icon"
              sizes="16x16"
              href={withPrefix('/favicons/favicon-16x16.png')}
            />
        <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
          <link
              rel="mask-icon"
              sizes="180x180"
              href={withPrefix('/favicons/safari-pinned-tab.svg')}
              color={'#c70039'}
            />
          <html lang="en" />
        </Helmet>
          <Header />
          {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout