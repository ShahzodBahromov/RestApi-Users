import express from 'express'
import controller from '../controllers/user.js'

const router = express.Router()

router
    .get('/users', controller.GET )
    .post('/users', controller.POST)
    .put('/users', controller.PUT)
    .delete('/users', controller.DELETE)

export default router