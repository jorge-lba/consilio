const mongoose = require( '../database/index.js' )

const QuestionSchema = new mongoose.Schema( {

    type: String,
    question: String,
    options: [ String ]

} )

const Question = mongoose.model( 'Question', QuestionSchema )

module.exports = Question