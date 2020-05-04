const User = require( '../models/User' )

const dateMultipliedByDays = ( days = 1 ) =>{

    const lastDate = new Date;
    return new Date(lastDate.setDate(lastDate.getDate() + days))

}
    

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

            const tasksUser = userUpdate.tasks

            response.status( 200 ).json( { message, task: tasksUser[ tasksUser.length - 1 ], task: tasksUser[ tasksUser.length - 1 ] } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    },

    async init( request, response ){

        try {

            const userId = request.params.id
            const { taskId, responsible, forecastDateToFinish } = request.body        

            const user = await User.findById( userId )

            const [task] = user.tasks.filter( task => task._id == taskId )
            
            const newTask = task.toObject()
            
            delete newTask._id

            newTask.taskId = task._id
            newTask.status = 'Em andamento'
            newTask.responsible = responsible
            newTask.initDate = new Date
            newTask.forecastDateToFinish = dateMultipliedByDays( forecastDateToFinish )

            const userUpdate = await User.findByIdAndUpdate( userId, {
                $push: { 
                    running: newTask 
                }
             }, { new: true } )

             response.status( 200 ).json( { message: 'Tarefa em progresso' } )

        } catch (error) {
            
            response.status( 400 ).json( { message: error } )

        }

    }

}