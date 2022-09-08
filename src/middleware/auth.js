const jwt = require('jsonwebtoken')

const unprotectedRoutes = [ // these you don't need a cookie
    "/auth/login",
    "/auth/register",
    "/graphql"
]


const authenticate = async (req, res, next) => {
    const token = req.cookies?.jwtToken || "" // do we have a jwtToken? no. return empty string

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET) // this will be "payload" decoded from console
        req.verifiedUser = verified
        console.log("User verification successful", verified)
        next()
    } catch(err) {
        console.log("User verification failed")

        if (unprotectedRoutes.includes(req.path)){
            next()
        } else {
            res.redirect("/auth/login")
        }
    }
}

module.exports = { authenticate }