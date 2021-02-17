const express = require('express');
const router = express.Router();
//const companyControllers = require('../controllers/companyControllers');
const staffControllers = require('../controllers/staffControllers');


/* GET users listing. */



router.get('/', staffControllers.index )


router.post('/insert', staffControllers.insert )

router.get('/:id', staffControllers.show)

module.exports = router;
