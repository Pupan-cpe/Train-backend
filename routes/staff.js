const express = require('express');
const router = express.Router();
//const companyControllers = require('../controllers/companyControllers');
const staffControllers = require('../controllers/staffControllers');


/* GET users listing. */



router.get('/', staffControllers.index )


router.post('/insert', staffControllers.insert )

router.get('/:id', staffControllers.show)
//  delete

// router.delete('/:id', staffControllers.del)
router.delete('/:id', staffControllers.destroy);

// router.put('/:id', staffControllers.update)
router.put('/:id', staffControllers.update);
module.exports = router;
