const seedUsers = require('./user-seeds');
const seedBlog = require('./blog-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

//seeding the database
const seedAll = async() => {
    await sequelize.sync({force: true});
    
    //seeds with data
    await seedUsers();

    await seedBlog();

    await seedComments();

    //not sure what this does
    process.exit(0);
};

//calls seed funtion to seed the database
seedAll();