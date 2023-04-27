const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.use('/main', routes);
app.use('/tarefa', routes);

module.exports = app;