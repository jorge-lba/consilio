const express = require( 'express' )
const UserController = require( '../src/controllers/UserController' )
const QuestionController = require( '../src/controllers/QuestionController' )
const TwilioController = require( '../src/controllers/TwilioController' )
const TaskController = require( '../src/controllers/TaskController' )


const routes = express.Router()

routes.get( '/users', UserController.index )
routes.post( '/users', UserController.create )
routes.put( '/users/:id', UserController.update )
routes.delete( '/users/:id', UserController.delete )

routes.put( '/users/:id/gut', TaskController.add )

routes.get( '/questions', QuestionController.index )
routes.post( '/questions', QuestionController.create )
routes.put( '/questions/:id', QuestionController.update )
routes.delete( '/questions/:id', QuestionController.delete )

routes.post( '/sms', TwilioController.sendSMS )

module.exports = routes