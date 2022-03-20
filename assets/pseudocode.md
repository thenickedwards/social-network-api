# API HW18
## Starter files
    X1. repo
    X2. models folder [User.js, Thought.js, index.js]
    X3. controllers folder [index.js api/ index.js, userRoutes.js (also contain friendRoutes), thoughtRoutes.js (also contain reactionRoutes)]
    X4a. server.js, config/connection.js (updated COLLECTION!) [pulled from mini proj]
    X4b. npm init -y (dependencies?) [pulled from mini proj]
    5. 

## Create Models
    X1. user model (username, email, thoughts w/ f key, friends with f key/slef ref)
    X2. thought model (thoughtTest createdAt, username, reactions w/ f key + schema)
    X3. test

## Seed data
    X1. not using seeds, will test manually

## Controllers/Routes
API Routes
    1. /api/users
        Xa. GET all users
        Xb. GET a single user by its _id and populated thought and friend data
        Xc. POST a new user
        Xd. PUT to update a user by its _id
        Xe. DELETE to remove user by its _id
        XBONUS f: Remove a user's associated thoughts when deleted.
    1b. /api/users/:userId/friends/:friendId
        Xg: POST to add a new friend to a user's friend list
        Xh: DELETE to remove a friend from a user's friend list
    2. /api/thoughts
        Xi. GET to get all thoughts
        Xj. GET to get a single thought by its _id
        Xk. POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
        Xl. PUT to update a thought by its _id
        Xm. DELETE to remove a thought by its _id
    2b: /api/thoughts/:thoughtId/reactions
        Xn: POST to create a reaction stored in a single thought's reactions array field
        Xo: DELETE to pull and remove a reaction by the reaction's reactionId value

## Cleanup
    1. Fix date format
    2. Delete comments, general cleanup
## Demo Video

### Special Thanks
https://github.com/validatorjs/validator.js
