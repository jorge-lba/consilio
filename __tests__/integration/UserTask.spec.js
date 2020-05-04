const request = require( 'supertest' )
const app = require( '../../src/app' )
const mongoose = require( '../../src/database/index' )

jest.setTimeout( 4000 )

const data = {
    user: {
        name: 'Jorge Luiz',
        email: 'jorgeluiz@test.com'
    },
    tasks:{
        name: 'Funil de Venda',
        description: 'O funil de vendas, ou funil do marketing, é um modelo estratégico de consumo que ilustra o percurso teórico que o cliente deve seguir até efetuar a compra de um produto ou serviço. Assim como no funil tradicional, o funil de vendas começa largo e vai diminuindo até chegar aos reais consumidores.',
        category: 'Comercial',
        gravity: 3,
        urgency: 5,
        trend: 5,
    }   
}

describe( "TASK_CREATE", () => {

    afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve cadastrar um usuario no banco de dados', async () => {
        
        const response = await request( app )
           .post( '/users' )
           .send( data.user )
  
        expect( response.body ).toHaveProperty( 'message', 'Usuário cadastrado com sucesso.' )
        data.user.id = response.body.user._id
  
      } )

    it( 'Deve adcionar uma tarefa no perfil do usuário', async () => {

        const response = await request( app )
            .put( `/users/${ data.user.id || '5eafa181cd99631eed7911ef' }/tasks` )
            .send( data.tasks )
        
        await request( app )
            .put( `/users/${ data.user.id || '5eafa181cd99631eed7911ef' }/tasks` )
            .send( data.tasks )
        
        await request( app )
            .put( `/users/${ data.user.id || '5eafa181cd99631eed7911ef' }/tasks` )
            .send( data.tasks )

        expect( response.body ).toHaveProperty( 'message', `A terefa ${ response.body.task.name } tem ${ response.body.task.impactPoints } postos de prioridade.` )

        data.tasks.id = response.body.task._id

    } )

    it( 'Deve iniciar a execução da tarefa', async () => {

        const response = await request( app )
            .put( `/users/${ data.user.id }/tasks/init` )
            .send( {
                taskId: data.tasks.id,
                responsible: 'Jorge Alegretti',
                forecastDateToFinish: 60
            } )

        expect( response.body ).toHaveProperty( 'message', 'Tarefa em progresso' )

    } )

    it( 'Deve deletar o usuário', async () => {

        const response = await request( app )
           .delete( `/users/${ data.user.id }` )
  
        expect( response.body ).toHaveProperty( 'message', 'Usuário deletado com sucesso.' )
  
      } )


} )