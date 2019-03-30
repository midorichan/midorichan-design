const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-contentful-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/templates/blog-post-contentful.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/paula/Documents/GitHub/midorichan-design/src/pages/work.js")))
}

