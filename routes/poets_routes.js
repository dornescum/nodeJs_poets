const express = require('express');
// const {route} = require("express/lib/router");

const router = express.Router();
let dummy_poets = [
	{
		"id": "1",
		"first_name": "aurel",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "2",
		"first_name": "ana",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "3",
		"first_name": "andrei",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "4",
		"first_name": "costel",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "5",
		"first_name": "costel",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "6",
		"first_name": "costin",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "7",
		"first_name": "dan",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "8",
		"first_name": "elena",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "9",
		"first_name": "george",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},
	{
		"id": "10",
		"first_name": "ionut",
		"second_name": "popescu",
		"desc": {
			"oras": "Bucuresti",
			"cartier":"Rahova"
		},
		"biography": {
			"year": {
				"1970": "first_book",
				"1971": "second_book",
				"1972": "third_book"
			}
		},
		"prison_time": {
			"year": {
				"1980": {
					"start_time": "1980",
					"realese_time": "1985",
					"accusation": "murder"
				},
				"1986": {
					"start_time": "1986",
					"release_time": "1990",
					"accusation": "theft"
				}
			}
		},
		"after_prison": {
			"sickness": {
				"disease": "migraine",
				"treatment": {
					"hospital": "nr_9",
					"doctors": {
						"first_doctor": {
							"first_name": "Ionut",
							"second_name": "Popescu",
							"branch": "General medicine"
						},
						"second_doctor": {
							"first_name": "Narian",
							"second_name": "Popescu",
							"branch": "General medicine"
						}
					}
				}
			}
		},
		"death": "1991"
	},



];




const poetsControllers = require('../controllers/poets_controler');
router.get('/', (req, res, next)=>{

	res.status(200).json({poets: dummy_poets})
});
router.get('/:id', poetsControllers.getPoetsById );
router.delete('/:id', poetsControllers.deletePoet);
router.post('/', poetsControllers.createPoet)
module.exports = router;
