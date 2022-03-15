const { Schema, Types, model } = require('mongoose');
// Use on 18.2.16?
//  more 18.3.26, 18.3.24
const thoughtSchema = require('./Thought');
import { isEmail } from 'validator';


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [ isEmail, 'Please provide a valid email.' ],
        },
        thoughts: {
            thoughts: [thoughtSchema]
        },
        // Is below right?
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;


// username
// String
// Unique
// Required
// Trimmed

// email
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

// thoughts
// Array of _id values referencing the Thought model

// friends
// Array of _id values referencing the User model (self-reference)

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
