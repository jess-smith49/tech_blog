const sequelize = require('../config/connection');
const {User, Blog} = require('../models');

const userData = [
    {
        username: 'smithj48',
        email: 'js.jessicasmith774@gmail.com',
        password: 'password01'
    },
    {
        username: 'jproc',
        email: 'procter.j@gmail.com',
        password: 'password02'
    }
]