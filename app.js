const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://admin:pupan1@cluster0.v4fge.mongodb.net/online_nodeapi?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffRouter);

module.exports = app;

