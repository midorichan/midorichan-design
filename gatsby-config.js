module.exports = {
  siteMetadata: {
    title: 'Paula Alonso Ishihara | UX Designer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '68nfklj2gzx5',
        accessToken: 'ab3fd0ffb5aa70b106e4020809a3a2f0463a1ca99682269507aec1ded75cce79'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'midorichan.design',
        short_name: 'midorichan',
        start_url: '/',
        background_color: '#C70039',
        theme_color: '#C70039',
        display: 'minimal-ui',
        include_favicon: false,
        theme_color_in_head: false,
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
