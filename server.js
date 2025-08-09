const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4000

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// Handle React Router - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Bind to 0.0.0.0 as required by Render
app.listen(port, '0.0.0.0', () => {
  console.log(`React app server listening on port ${port}`)
})
