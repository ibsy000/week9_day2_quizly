const dotenv = require('dotenv')
const express = require('express') // require runs this 'express' module, which ulitimately creates a new application
const path = require('path')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const cookieParser = require('cookie-parser')
const { authenticate } = require('./src/middleware/auth')
const { userData } = require('./src/middleware/userData')


dotenv.config() // Loads .env file contents into process.env.
const app = express()
connectDB()

app.use(cookieParser())

app.use(authenticate) // we want this after the cookieParser

// Add userData middleware AFTER authentication middleware
app.use(userData)

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


// Set the view engine to ejs (install ejs package) => npm i ejs
app.set('view engine', 'ejs')

// update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

// Need this middleware so that the form data is added to request
// takes form data and adds to request under {body}
// we want to take this data and send to our database and create a new user
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('dashboard')
})

// Initialize routes
// initRoutes is equal to the function in index.js under routes
const initRoutes = require('./src/routes')
initRoutes(app)


// Binds and listens for connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`Server is now running on ${process.env.PORT}`)
})