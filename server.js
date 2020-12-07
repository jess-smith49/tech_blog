const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express ();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
    secret: 'secret',
    cookie: {}
}

//middleware
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers'));

