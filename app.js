const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const poetsRoutes = require('./routes/poets_routes');
// const deletePoets = require('./routes/poets_routes')


const app = express();
app.use(bodyParser.json());

app.use('/api/poets', poetsRoutes);

// middelware pt route inexistente
app.use((req, res, next)=>{
	const error = new Error('no route found for your search');
	return next(error)
})

// middellware recunoscut de express pt erori : 4 argumente (err, req, res, next)
app.use((error, reqm, res, next)=>{
	if (res.headerSent){
		return next(error)
	}
	res.status(error.code || 500)
	res.json({message: error.message || 'something went wrong'})
})

const PORT = process.env.PORT || 3333;

mongoose
	.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@thenetninja.ftnae.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
	.then(()=>{
		app.listen(PORT);
		// app.listen(process.env.PORT || 5000, function(){
		// 	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
		// });
	})


	.catch(err => console.log(err))

