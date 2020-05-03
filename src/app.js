const express = require( 'express' )
const cors = require( 'cors' )
const routes = require( './routes.js' )
const config = require( './utils/authZero' )

const app = express()

app.use(auth(config))
app.use( cors() )
app.use( express.json() )
app.use( routes )

module.exports = app