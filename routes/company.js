const express = require('express');
const router = express.Router();
//const companyControllers = require('../controllers/companyControllers');
const companyControllers = require('../controllers/companyControllers');


/* GET users listing. */



router.get('/', companyControllers.index )
router.get('/register', companyControllers.register )


module.exports = router;
