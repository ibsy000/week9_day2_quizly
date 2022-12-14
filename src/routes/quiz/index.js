const QuizDashboardRouter = require('express').Router()

QuizDashboardRouter.route("/create")
    .get(require('./editor'))
    .post(require('./create'))

QuizDashboardRouter.route("/:slug")
    .get(require('./view'))

module.exports = QuizDashboardRouter