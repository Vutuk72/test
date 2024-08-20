const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')


//getting all
router.get('/', async (req, res) => {
    // res.send('Hello World')
    try {
        const subscribers = await Subscriber.find()
        console.log(subscribers)
        res.json(subscribers)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//creating one
router.post('/', async (req, res) => {
    console.log(req.body)
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//updateing one
router.patch('/', (req, res) => {
    
})

//deleting one
router.delete('/:id', (req, res) => {
    
})

async function getSubscriber(req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message:'Cannot find subscriber'})
        }
    } catch (err){
        return res.status(500).json({ message: err.message})
    }

    res.subscriber = subscriber
}
module.exports = router