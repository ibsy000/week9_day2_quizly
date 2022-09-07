const MainAuthRouter =  require('express').Router()

// using .route makes it to where you can add each (.get, .post, .put, .delete method under one route)
MainAuthRouter.route('/register')
    .get(require('./register.view'))
    .post(require('./register'))

MainAuthRouter.route('/login')
    .get(require('./login.view'))

// MainAuthRouter.get('/', (req, res) => {
//     res.send('Main Auth Router')
// })

// MainAuthRouter.post('/', (req, res) => {
//     res.send('Post Main Auth Router')
// })

// MainAuthRouter.put('/', (req, res) => {
//     res.send('Post Main Auth Router')
// })

// MainAuthRouter.delete('/', (req, res) => {
//     res.send('Post Main Auth Router')
// })

// this allows us in another file when we use require auth, returns the MainAuthRouter
module.exports = MainAuthRouter