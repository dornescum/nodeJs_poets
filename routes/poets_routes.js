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

router.get('/:id', (req, res, next) => {
	const poetId = req.params.id;
	const poet = dummy_poets.find(p =>{
		return p.id === poetId;
	})
	// console.log(poet);
	res.json({poet});
	// res.json({poet:poet});
});
module.exports = router;
