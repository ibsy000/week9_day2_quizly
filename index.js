const express = require('express') // require runs this 'express' module, which ulitimately creates a new application
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Initialize routes
// initRoutes is equal to the function in index.js under routes
const initRoutes = require('./src/routes')
initRoutes(app)


// Binds and listens for connections on the specified host and port
app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})