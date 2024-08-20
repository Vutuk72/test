import { subscribe } from '../routes/subscribers'

const mongoose = require('mongoose')

const subscribersShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribersToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

mondule.exports = mongoose.model('Subscriber', subscriberSchema)