const twilio = require( 'twilio' )
require( 'dotenv/config' )

const twilioClient = twilio( 
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

const sendMessageSMS = async ( sendTo, message = 'Consilio - Plataformas de Gestão e Educação' ) => {

    try {

        const response  = await twilioClient.messages.create({

            from: process.env.TWILIO_NUMBER,
            to: sendTo || process.env.TWILIO_NUMBER_TEST,
            body: message

        })

    } catch (error) {
        console.log( error )
    }

}


module.exports = sendMessageSMS
