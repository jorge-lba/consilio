const User = require( '../models/User' )

module.exports = {

    async add ( request, response ){

        try {
            
            const userId = request.params.id
            const task = request.body
            const userUpdate = await User.findByIdAndUpdate( userId, { new: true } )

        } catch (error) {
            
        }

    }

}