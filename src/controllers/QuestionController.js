const Question = require( '../models/Question' )

module.exports = {

    async index( request, response ){

        try {
            
            const questions = await Question.find()

            response.status( 200 ).json( questions )


        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

    async create( request, response ){

        try {
            
            const question = request.body
            const questionCreated = await Question.create( question )

            response.status( 200 ).json( {
                message: 'Pergunta cadastrada com sucesso',
                question: questionCreated
            } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

    async update ( request, response ){

        try {
            
            const id = request.params.id
            const question = request.body
            const questionUpdate = await Question.findByIdAndUpdate( id, { new: true } )

            response.status( 200 ).json( { message: 'Pergunta atualizada com sucesso' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

    async delete ( request, response ){

        try {
            
            const id = request.params.id

            await Question.findByIdAndDelete( id )

            response.status( 200 ).json( { message: 'Pergunta deletada com sucesso.' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    }

}