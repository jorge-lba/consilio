const sms = require( '../APIs/twilio/index' )

module.exports = {

    async sendSMS( request, response ){

        try {
            console.log( request.params.number )
            const details = await sms( request.params.number )

            response.status( 200 ).json( { message: 'Enviamos uma mensagem para você', details } )
            
        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    }

}