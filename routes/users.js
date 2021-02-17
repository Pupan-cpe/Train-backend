const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/UserControllers');


/* GET users listing. */



router.get('/', userControllers.index )
router.get('/register', userControllers.register )

module.exports = router;
