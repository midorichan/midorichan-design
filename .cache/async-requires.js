// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-contentful-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/templates/blog-post-contentful.js" /* webpackChunkName: "component---src-templates-blog-post-contentful-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-work-js": () => import("/Users/paula/Documents/GitHub/midorichan-design/src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/paula/Documents/GitHub/midorichan-design/.cache/data.json")

