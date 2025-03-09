/*
Steps to follow:
1. Create one folder and inside this folder create index.js and instantiate the express server, call dbConnect(),
   mount a route a route(./api/v1), and activate the server.
2. Open your terminal and run following commands:
     a) npm init -y
     b) npm install express
     c) npm install mongoose
     d) npm install nodemon and make changes in package.json
     e) npm install dotenv
3. Create a new file named .env and add your mongodb URL and PORT
4. Create a folder config and create one file database.js. Add your database connection code here.
5. Create controllers folder and add three file postController.js, likeController.js,commentController.js and
    add route handler code here.
6. Create models folder and add three file postModel.js, likeModel.js and commentModel.js and add your schema here.
7. Create routes folder and add one file blogRoute.js and add your route code here.
*/