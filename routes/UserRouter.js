const express=require('express')
const router=express.Router()

const { UserController }=require('../controller')

router.post('/login', UserController.logIn)
router.post('/signup', UserController.signUp)

module.exports=router