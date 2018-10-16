module.exports = {
  siteMetadata: {
    title: 'Paula Alonso Ishihara | Experience Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#C70039',
        theme_color: '#C70039',
        display: 'minimal-ui',
        icon: 'src/images/faviconb-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
