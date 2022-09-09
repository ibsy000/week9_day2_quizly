// Import Types from GraphQL
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')

// Import our own created type
const { UserType, QuizType } = require('./types')

// Import model so we can get data from MongoDB
const { User, Quiz } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: "Query all users in the database",
    resolve(parent, args){ // this is where we want to return all of our users
        return User.find()
    }
}

const user = {
    type: UserType,
    description: "Query user by ID",
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        return User.findById(args.id)
    }
}

// Create a query that will get a quiz by the slug = add slug to args
const quizBySlug = {
    type: QuizType,
    description: 'Query quiz by its slug',
    args: {
        slug: { type: GraphQLString }
    },
    resolve(parent,args){
        return Quiz.findOne({ slug: args.slug })
    }
}


module.exports = {
    users,
    user,
    quizBySlug
}