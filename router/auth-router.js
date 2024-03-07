const express = require('express')

const router = express.Router()
const signUpSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')
// controllers
const {home, register, login }= require('../controllers/auth-controller')

// Routes

router.route('/').get(home)
router.route('/register').post(validate(signUpSchema), register)
router.route('/login').post(login)



module.exports = router;