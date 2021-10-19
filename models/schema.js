const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const poetSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	second_name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		town: String
	},
	biography: {
		year: {
			type:String,
			required: true
		},
		book:{
			type:String,
			required: true
		},
	},
	prison_time: {
		year: {
			type:String,
			required: true
		},
		start_time:{
			type:String,
			required: true
		},
		release_time:{
			type:String,
			required: true
		},
	},
	after_prison: {
		sickness: {
			type: String,
			required: true,
			disease: {
				type: String,
				required: true,
				treatment:{
					type: String,
					required: true,
					hospital: {
						type: String,
						required: true,
					},
					doctors: {
						first_name: {
							type: String,
							required: true
						},
						second_name: {
							type: String,
							required: true
						},
						branch : {
							type: String,
							required: false
						},

					}
				}
			}
		}
	},
	death: {
		type:String,
		required: true
	}

});

module.exports = mongoose.model('Poet', poetSchema)

