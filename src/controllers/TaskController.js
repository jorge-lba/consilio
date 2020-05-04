const User = require( '../models/User' )

module.exports = {

    async add ( request, response ){

        try {
            
            const userId = request.params.id
            const { gravity, urgency, trend, name } = request.body
            const task = {
                ...request.body,
                impactPoints: ( gravity * urgency * trend )
            }

            const userUpdate = await User.findByIdAndUpdate( userId, {
                $push: { 
                     tasks: task 
                }
             }, { new: true } )

            const message = `A terefa ${ name } tem ${ gravity * urgency * trend } postos de prioridade.`

            response.status( 200 ).json( { message, task } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    }

}