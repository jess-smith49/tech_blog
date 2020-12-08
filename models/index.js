//getting all of the models
const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

//creating associations

//user has many blog posts
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

//blog posts have one user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

//user can belong to many blog posts
User.belongsToMany(Blog, {

})

//

//exporting 
module.exports = {User, Blog, Comment};