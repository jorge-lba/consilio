const mongoose = require( '../database/index.js' )

const UserSchema = new mongoose.Schema( {

    name:{ type: String },
    email:{ type: String, unique: true },
    rank:{
        points: [ Number ],
        position: Number,
        achievements:[{
            type: String,
            name: String,
            details: String,
            acquiredPoints: Number,
            medal: String,
            initDate: Date,
            endDate: Date
        }]

    },

    questions: [{
        question: String,
        answer: String,
        category: String,
    }],

    tasks:[{
        name: String,
        description: String,
        category: String,
        gravity: Number,
        urgency: Number,
        trend: Number,
        impactPoints: Number,
        
    }],

    running:[{
        taskId: String,
        name: String,
        description: String,
        category: String,
        gravity: Number,
        urgency: Number,
        trend: Number,
        impactPoints: Number,
        status: String,
        responsible: String,
        initDate: Date,
        forecastDateToFinish: Date,
        finishedDate: Date,
    }],
    
    // commercial: {
        
    // },

    // marketing: {
        
    // },
        
    // operational: {
        
    // },
        
    // financial: {
        
    // },
        
    // legislation: {
       
    // },
        
    // management: {
        
    // },

} )

const User = mongoose.model( 'User', UserSchema )

module.exports = User