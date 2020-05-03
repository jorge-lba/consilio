require( 'dotenv/config' )

module.exports = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: 'a long, randomly-generated string stored in env'
  },
  baseURL: process.env.AUTH_BASE_URL,
  clientID: process.env.AUTH_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
}