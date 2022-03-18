const { Types } = require('mongoose');
const { User } = require('../models');

// Pulling from Mini Proj - courseController

module.exports = {
// 1. /api/users
// a. GET all users
    getUsers(req, res) {
        User.find()
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
// b. GET a single user by its _id and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
// c. POST a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// d. PUT to update a user by its _id
    updateUser(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
        .then((course) =>
            !course
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
// e. DELETE to remove user by its _id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : Student.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and thoughts deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
// TODO: BONUS f: Remove a user's associated thoughts when deleted.



// 1b. /api/users/:userId/friends/:friendId

// g: POST to add a new friend to a user's friend list

// h: DELETE to remove a friend from a user's friend list
};