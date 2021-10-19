const express = require('express');
const bodyParser = require('body-parser');

const poetsRoutes = require('./routes/poets_routes');


const app = express();
app.use('/api/poets',poetsRoutes);

app.listen(5000);
