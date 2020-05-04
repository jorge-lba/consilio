const User = require( '../models/User' )

module.exports = {

    async add ( request, response ){

        try {
            
            const userId = request.params.id
            const question = request.body
            
            const userUpdate = await User.findByIdAndUpdate( userId, {
                $push: { 
                    questions: question 
                }
             }, { new: true } )

            response.status( 200 ).json( { message: 'Pergunta incluida com sucesso' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    }
    
}