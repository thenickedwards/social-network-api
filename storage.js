const peeps =
[
	{
		"_id": "6234184e73ab8456d0ef8e89",
		"username": "rui",
		"email": "raul.ruidiaz@soundersfc.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	},
	{
		"_id": "6234186673ab8456d0ef8e8c",
		"username": "croldan",
		"email": "christian.roldan@soundersfc.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	},
	{
		"_id": "6234187973ab8456d0ef8e8e",
		"username": "coach.schmetz",
		"email": "brian.schmetzer@soundersfc.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	},
	{
		"_id": "6234188f73ab8456d0ef8e90",
		"username": "nouhou.choochoo",
		"email": "nouhou.tolo@soundersfc.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	}
]

// k. POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // createThought(req, res) {
    //     Thought.create(req.body)
    //     .then((thought) => res.json(thought))
    //     .catch((err) => {
    //         console.log(err);
    //         return res.status(500).json(err);
    //     });
    // },

// e. DELETE to remove user by its _id
// deleteUser(req, res) {
// 	User.findOneAndDelete({ _id: req.params.userId })
// 	.then((user) =>
// 		!user
// 		? res.status(404).json({ message: 'No user with that ID' })
// 		: User.deleteMany({ _id: { $in: user.thoughts } })
// 	)
// 	.then(() => res.json({ message: 'User and thoughts deleted!' }))
// 	.catch((err) => {
// 		console.log(err);
// 		res.status(500).json(err);
// 	  });
// },