const { Schema, Types, model } = require('mongoose');
// reaction field's subdocument schema in the Thought model
// Use on 18.2.18?
// Use book as reaction and library as thought???

// reactionSchema SCHEMA HERE
const reactionSchema = new Schema(
  {
      reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
      },
      reactionBody: {
          type: String,
          required: true,
          minLength: 1,
          maxLength: 280,
        },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
);

// reactionId
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId

// reactionBody
// String
// Required
// 280 character maximum

// username
// String
// Required

// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query


// Schema Settings:
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User',
      }
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = thoughtSchema;

// X thoughtText
// String
// Required
// Must be between 1 and 280 characters

// X createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// getters?? username (The user that created this thought)
// String
// Required

// reactions (These are like replies)
// Array of nested documents created with the reactionSchema

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.