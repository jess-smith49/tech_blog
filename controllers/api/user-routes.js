const router = require('express').Router();
const {User, Blog, Comment} = require('../../models');

//getting all of the users
router.get('/', (req, res) => {
    User.findAll({

    })
})

//getting one user
router.get('/:id', (req, res) => {
    User.findOne({

    })
})

//creating a new user
router.post('/', (req, res) => {
    User.create({

    })
})

//login route

//logout route

//updating a user

//deleting a user
router.delete('/:id', (req, res) => {
    User.destroy({

    })
})
