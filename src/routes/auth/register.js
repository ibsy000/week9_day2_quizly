module.exports = (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: "Your passwords do not match"})
        return
    }
    res.send('Post Register from register')
}