const request = require( 'supertest' )
const app = require( '../../src/app' )
const mongoose = require( '../../src/database/index' )

jest.setTimeout( 4000 )

const data = {
    user: {
        id: '5eb026744362630017a9a236'
    }
}

describe( 'QUESTION_ADD', () => {

    afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve adcionar uma quastão no perfil do usuario', async () => {
        
            const questionsDb = await (await request( app ).get( '/questions' ))

            const questions = questionsDb.body

            const response = await request( app )
                .put( `/users/${ data.user.id }/questions/add` )
                .send( {
                    ...questions[1],
                    answer: questions[1].options[1]
                } )
        
            expect( response.body ).toHaveProperty( 'message', 'Pergunta incluida com sucesso' )

    } )

} )