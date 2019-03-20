import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Oh, snap<span>.</span></h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Marty... we gotta go back!</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
