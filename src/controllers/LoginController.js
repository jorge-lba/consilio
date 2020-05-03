const { requiresAuth } = require('express-openid-connect');

module.exports = {

    async login( request, response ){
        response.send(req.isAuthenticated() ? 'Logged in' : 'Logged out')
    },

    async logout( request, response ){

    },

    async callback( request, response ){
        
    },

    async profile( request, response ) {
        response.send(JSON.stringify(request.openid.user));
    },

}