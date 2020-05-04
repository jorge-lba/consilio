const request = require( 'supertest' )
const app = require( '../../src/app' )

require( 'dotenv/config' )

describe( "TWILIO", () => {

    it( 'Deve enviar uma mensagem SMS', async () => {
        const response = await request( app )
            .post( `/sms` )
            .send( { number: process.env.TWILIO_NUMBER_TEST } )
        
        expect( response.body ).toHaveProperty( 'message', 'Enviamos uma mensagem para você' )
    } )

} )