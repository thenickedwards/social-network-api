const { Types } = require('mongoose');
const { User, Thought } = require('../models');

// Pulling from Mini Proj - courseController

module.exports = {
// 1. /api/users
// a. GET all users
    getUsers(req, res) {
        User.find()
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
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
        // .catch((err) => res.status(500).json(err));
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
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
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
// e. DELETE to remove user by its _id
// BONUS f: Remove a user's associated thoughts when deleted.
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and thoughts deleted!' }))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

// 1b. /api/users/:userId/friends/:friendId
// g: POST to add a new friend to a user's friend list
// TAG = FRIEND     APPLICATION = USER
    addFriend(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
// h: DELETE to remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

};