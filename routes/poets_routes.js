const express = require('express');
const {route} = require("express/lib/router");

const router = express.Router();

router.get('/poets', (req, res, next)=>{
	console.log('get request in poets');
	res.json({message: 'it works'})
})
 module.exports = router;
