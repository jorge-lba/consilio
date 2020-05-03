 const request = require( 'supertest' )
 const app = require( '../../src/app' )
 const mongoose = require( '../../src/database/index' )

 jest.setTimeout( 40000 )

 const data = {
    user: {
       name: 'Jorge Luiz',
       email: 'jorge@test.com'
    }
 }

 describe( "USER", () => {

   afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve cadastrar um usuario no banco de dados', async () => {
        
      const response = await request( app )
         .post( '/users' )
         .send( data.user )

      expect( response.body ).toHaveProperty( 'message', 'Usuário cadastrado com sucesso.' )
      data.user.id = response.body.user._id

    } )

    it( 'Deve listar usuários cadastrados', async () => {

      const response = await request( app )
         .get( '/users' )

      expect( response.body instanceof Array ).toBe( true )

    } )

    it( 'Deve atualizar o usuário', async () => {

      const response = await request( app )
         .put( `/users/${ data.user.id }` )
         .send( {
            name: 'Jorge Luiz'
         } )

      expect( response.body ).toHaveProperty( 'message', 'Usuário atualizado com sucesso.' )
    } )

 } )