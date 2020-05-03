const request = require( 'supertest' )
const app = require( '../../src/app' )
const mongoose = require( '../../src/database/index' )

jest.setTimeout( 40000 )

const data = {
   questions:[{
       type: 'Comercial',
       question: 'Quantas pessoas tem no seu time comercial? escala de 1 a 6+',
       options: [ '1', '2', '3', '4', '5', '6+' ]
   }]
}

describe( "QUESTION", () => {

    afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve cadastrar uma pergunta no banco de dados', async () => {

        const response = await request( app )
            .post( '/questions' )
            .send( data.questions[ 0 ] )
        
            expect( response.body ).toHaveProperty( 'message', 'Pergunta cadastrada com sucesso' )

        data.questions[0].id = response.body.question._id

    } )

    it( 'Deve listar todas as perguntas', async () => {

        const response = await request( app )
            .get( '/questions' )
        
        expect( response.body instanceof Array ).toBe( true )

    } )

    it( 'Deve atualizar uma pergunta', async () => {

        const response = await request( app )
            .put( `/questions/${ data.questions[0].id }` )
            .send( {
                question: 'Quantas pessoas tem no seu time comercial? escala de 1 a 7+'
            } )

        expect( response.body ).toHaveProperty( 'message', 'Pergunta atualizada com sucesso' )

    } )

    it( 'Deve deletar uma pergunta', async () => {

        const response = await request( app )
            .delete( `/questions/${ data.questions[0].id }` )

        expect( response.body ).toHaveProperty( 'message', 'Pergunta deletada com sucesso.' )

    } )

} )