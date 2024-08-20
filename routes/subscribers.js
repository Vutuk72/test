const express = require('express')
const router = express.Router()


//getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//creating one
router.post('/', (req, res) => {
    
})

//updateing one
router.patch('/', (req, res) => {
    
})

//deleting one
router.delete('/:id', (req, res) => {
    
})
module.exports = router