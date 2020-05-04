const express = require( 'express' )
const UserController = require( '../src/controllers/UserController' )
const QuestionController = require( '../src/controllers/QuestionController' )
const TwilioController = require( '../src/controllers/TwilioController' )
const TaskController = require( '../src/controllers/TaskController' )
const UserQuestionController = require( '../src/controllers/UserQuestionController' )

const routes = express.Router()

routes.get( '/users', UserController.index )
routes.post( '/users', UserController.create )
routes.put( '/users/:id', UserController.update )
routes.delete( '/users/:id', UserController.delete )

routes.put( '/users/:id/tasks', TaskController.add )
routes.put( '/users/:id/tasks/init', TaskController.init )
routes.put( '/users/:id/tasks/finished', TaskController.finished )

routes.put( '/users/:id/questions/add', UserQuestionController.add )


routes.get( '/questions', QuestionController.index )
routes.post( '/questions', QuestionController.create )
routes.put( '/questions/:id', QuestionController.update )
routes.delete( '/questions/:id', QuestionController.delete )

routes.post( '/sms', TwilioController.sendSMS )

module.exports = routes