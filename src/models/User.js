const mongoose = require( '../database/index.js' )

const UserSchema = new mongoose.Schema( {
    name:{ type: String },
    email:{ type: String },
} )

const User = mongoose.model( 'User', UserSchema )

module.exports = User