export default eventHandler((event) => {
  event.node.res.setHeader('content-type', 'text/html')
  return '<html><body>Home page</body></html>'
})
