const express = require('express')
const route = express.Router();
const userController = require('../Controller/userController.js')

// route.post('/', (req, res, next)=>{
//     res.json('Jayshree the Developer')
// })
route.post('/create',userController.createUser)
route.get('/',userController.getUserData)
route.get('/get/:id',userController.getUserDataByID)

module.exports = route;
