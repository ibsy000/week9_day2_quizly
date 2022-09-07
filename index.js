const express = require('express') // require runs this 'express' module, which ulitimately creates a new application
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Set the view engine to ejs (install ejs package) => npm i ejs
app.set('view engine', 'ejs')

// update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

// Initialize routes
// initRoutes is equal to the function in index.js under routes
const initRoutes = require('./src/routes')
initRoutes(app)


// Binds and listens for connections on the specified host and port
app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})