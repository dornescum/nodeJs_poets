const express = require('express');
// const {route} = require("express/lib/router");

const router = express.Router();





const poetsControllers = require('../controllers/poets_controler');

router.get('/:id', poetsControllers.getPoetsById );
router.delete('/:id', poetsControllers.deletePoet);
module.exports = router;
