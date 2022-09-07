const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Binds and listens for connections on the specified host and port
app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})