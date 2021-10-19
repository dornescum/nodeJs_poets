const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const poetBio = mongoose.Schema({
	year: [String],
	book: [String],
	// address: {
	// 	type: AddressSchema,
	// 	required: true,
	// },
});
const prisonTime = mongoose.Schema({
	year: {
		type: String,
		required: true
	},
	start_time: {
		type: String,
		required: true
	},
	release_time: {
		type: String,
		required: true
	},
});
const afterPrison = mongoose.Schema({
	sickness: {
		type: String,
		required: true
	},

	disease: {
		type: String,
		required: true
	},
	treatment: {
		type: String,
		required: true
	},
})
;

const poetSchema = new Schema({
	// first_name: String,
	// second_name: String
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
		type: String
	},
	biography: poetBio,
	prison_time: prisonTime,
	after_prison: afterPrison,


	death: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('Poet', poetSchema);

