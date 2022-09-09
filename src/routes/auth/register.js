// const { User } = require('../../models') // no longer need user model
const axios = require('axios')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: "Your passwords do not match"})
        return
    }
    try{
        const mutation = `
        mutation register($email: String!, $username: String!, $password: String!){
            register( email: $email, username: $username, password: $password)
        }
        `

        // Make a POST request to GraphQL with a request body with the query and variable from the request
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
            {
                query: mutation,
                variables: {
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password
                }
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const jwtToken = data.data.register
        console.log(jwtToken)

        res.cookie('jwtToken', jwtToken, { maxAge: 900000, httpOnly: true })

        res.redirect('/')

    } catch(e) {
        console.log(e)
        res.redirect('/auth/register')
    }
}