# social-network-api
Homework 18 NoSQL: Social Network API

All code for Social Network API written per acceptance criteria in [/assets/provided/W18-hw_README.md](/assets/provided/W18-hw_README.md).

## Work Done
* When a user enters the command (npm start) to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database
* When a user opens API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON
* When a user tests API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete users and thoughts in my database
* When a user tests API POST and DELETE routes in Insomnia, they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
* UPDATE! When originally submitted dates were not reformatted. The Thought model has been revised to format the createdAt date for the Thought model (Thought and Reaction schema). These will NOT appear in the demo video (it was recorded before the change) but are functional. Thanks!

## Links
URL for GitHub repo: https://github.com/thenickedwards/social-network-api

## Demo Video
Included is a video that demonstrates where to find the GitHub repository, how to start the application/server, and each route demonstarted to diplay functionality. There are also [mp4](/assets/social-network-api_demo-video.mp4) and [webm](/assets/social-network-api_demo-video.webm) video files in the assets folder or you can use this link to the video in my Google Drive: [https://drive.google.com/file/d/13hqibO4sHAMm-Y0uQgsao7TMU7YNBYtf/view](https://drive.google.com/file/d/13hqibO4sHAMm-Y0uQgsao7TMU7YNBYtf/view)


Thank you for reading the readme!

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)