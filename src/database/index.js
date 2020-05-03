const mongoose = require( 'mongoose' )
require( 'dotenv/config' )

mongoose.Promise = global.Promise

mongoose.connect( process.env.URL_DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
} )

module.exports = mongoose