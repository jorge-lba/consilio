const User = require( '../models/User' )

module.exports = {

    async index ( request, response ){
        
        try {
            
            const users = await User.find()

            response.status( 200 ).json( users )

        } catch (error) {
         
            response.status( 400 ).json( { message: error } )

        }

    },

    async create ( resquest, response ){

        try {
            
            const user = resquest.body
            const userCreated = await User.create( user )

            response.status( 200 ).json( {
                message: 'Usuário cadastrado com sucesso.',
                user: userCreated
            } )

        } catch (error) {
         
            response.status( 400 ).json( { message: error } )

        }

    },

    async update ( request, response ){

        try {
            
            const id = request.params.id
            const user = request.body
            const userUpdate = await User.findByIdAndUpdate( id, { new: true } )

            console.log( userUpdate )

            response.status( 200 ).json( { message: 'Usuário atualizado com sucesso.' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

    async delete ( request, response ){

        try {
            
            const id = request.params.id
            
            await User.findByIdAndDelete( id )

            response.status( 200 ).json( { message: 'Usuário deletado com sucesso.' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

}