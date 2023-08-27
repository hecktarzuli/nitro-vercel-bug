export default eventHandler((event) => {
  event.node.res.setHeader('content-type', 'text/html')
  return '<html><body>Home page <a href="/about/">About Page</a></body></html>'
})
