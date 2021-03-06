//core modules
const path = require('path');

//other-modules
const express = require('express');
const compression = require('compression');

//imported functions
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.enable('trust proxy');

app.use(compression());

//Setting up the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//Mounting the exported routers on a route
app.use('/', viewRouter);

module.exports = app;
