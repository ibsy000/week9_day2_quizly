// create a function that is going to set up all of our routes

module.exports = function(app){
    app.use('/auth', require('./auth'))
}
