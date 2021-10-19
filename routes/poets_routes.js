const express = require('express');
const {route} = require("express/lib/router");

const router = express.Router();


const dummy_poets = [
	{
		"id": "1",
		"first_name": "gigi",
		"second_name": "duru",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
	},
	{
		"id": "2",
		"first_name": "gica",
		"second_name": "duru",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Berceni"
		},
	},

];


const poetsControllers = require('../controllers/poets_controler')
router.get('/:id', poetsControllers );
module.exports = router;
