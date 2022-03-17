# API HW18
## Starter files
    X. repo
    X. models folder [User.js, Thought.js, index.js]
    X. controllers folder [index.js api/ index.js, userRoutes.js (also contain friendRoutes), thoughtRoutes.js (also contain reactionRoutes)]
    X. server.js, config/connection.js (updated COLLECTION!) [pulled from mini proj]
    X. npm init -y (dependencies?) [pulled from mini proj]
    5. 

## Create Models
    X. user model (username, email, thoughts w/ f key, friends with f key/slef ref)
    X. thought model (thoughtTest createdAt, username, reactions w/ f key + schema)
    3. test

## Seed data
    1. not using seeds, will test manually

## Controllers/Routes
API Routes
    1. /api/users
        a. GET all users
        b. GET a single user by its _id and populated thought and friend data
        c. POST a new user
        d. PUT to update a user by its _id
        e. DELETE to remove user by its _id
        BONUS f1: /api/users/:userId/friends/:friendId
            f2: POST to add a new friend to a user's friend list
            f3: DELETE to remove a friend from a user's friend list
    2. /api/thoughts
        g. GET to get all thoughts
        h. GET to get a single thought by its _id
        i. POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
        j. PUT to update a thought by its _id
        k. DELETE to remove a thought by its _id
        j1: /api/thoughts/:thoughtId/reactions
            j2: POST to create a reaction stored in a single thought's reactions array field
            j3: DELETE to pull and remove a reaction by the reaction's reactionId value
