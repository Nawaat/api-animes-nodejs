const router = require('express').Router();

const UserController = require('../controllers/User_Controller');

const ValidateToken = require('../providers/Validate_Token');


/**
 * si en url nous retrouvons createBrand
 * nous excutons la methode new Brand dans le controlleur
 */
router.post('/createUser', UserController.signUp)

router.post('/signIn', UserController.signIn)

router.post('/ValidateToken', ValidateToken.validateToken)

module.exports = router;