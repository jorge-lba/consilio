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
    planning: {
        
        commercial: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                gravity: Number,
                urgency: Number,
                trend: Number,
                impactPoints: Number,
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]
        },

        marketing: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                gravity: Number,
                urgency: Number,
                trend: Number,
                impactPoints: Number,
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]
        },
         
        operational: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                gravity: Number,
                urgency: Number,
                trend: Number,
                impactPoints: Number,
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]
        },
         
        financial: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                gravity: Number,
                urgency: Number,
                trend: Number,
                impactPoints: Number,
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]
        },
         
        legislation: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                gravity: Number,
                urgency: Number,
                trend: Number,
                impactPoints: Number,
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]
        },
         
        management: {
            questions: [{
                question: String,
                answer: String,
            }],
            items:[{
                name: String,
                description: String,
                impactPoints: String
            }],
            running:[{
                itemId: String,
                status: String,
                responsible: String,
                initDate: Date,
                endDate: Date,
            }]

        },

    },



} )

const User = mongoose.model( 'User', UserSchema )

module.exports = User