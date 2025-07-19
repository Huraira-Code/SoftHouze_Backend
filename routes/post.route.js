import express from 'express'
import { create, deletepost, getposts, updatepost, getpostById } from '../controllers/post.controller.js'

const router = express.Router()

router.post('/create', create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', deletepost)
router.put('/updatepost/:postId', updatepost)
router.get('/getpost/:id', getpostById)

export default router