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

const getPoetsById = (req, res, next) => {
	const poetId = req.params.id;
	const poet = dummy_poets.find(p =>{
		return p.id === poetId;
	})
	// if(!poet){
	// 	return res.status(404).json({message: 'no poet'});
	// }
	// dc esti async folosesti next(error)
	if(!poet){
		const error = new Error('no poet found');
		error.code = 404;
		// throw error;
		return next(error); // pt next(error) trebuie return!!!
	}

	res.json({poet});
	// res.json({poet:poet});
}
module.exports = getPoetsById;
