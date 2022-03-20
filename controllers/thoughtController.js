const { Types } = require('mongoose');
const { Thought, User } = require('../models');

module.exports = {
// 2. /api/thoughts
// i. GET to get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .select('-__v')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
// j. GET to get a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID!' })
            : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
// k. POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Thought created, but found no user with that ID',
                })
              : res.json('Created the thought 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
// l. PUT to update a thought by its _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
// m. DELETE to remove a thought by its _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : User.deleteMany({ _id: { $in: thought.reactions } })
        )
        .then(() => res.json({ message: 'Thought and reactions deleted!' }))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

// 2b: /api/thoughts/:thoughtId/reactions
// n: POST to create a reaction stored in a single thought's reactions array field

// o: DELETE to pull and remove a reaction by the reaction's reactionId value

};