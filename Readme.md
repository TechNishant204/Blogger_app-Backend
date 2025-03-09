
### Steps to follow:

Create one folder and inside this folder create index.js and instantiate the express server, call dbConnect(),

mount a route a route(./api/v1), and activate the server.

### Open your terminal and run following commands:

a) npm init -y

b) npm install express

c) npm install mongoose

d) npm install nodemon and make changes in package.json

e) npm install dotenv

Create a new file named .env and add your mongodb URL and PORT

Create a folder config and create one file database.js. Add your database connection code here.

Create controllers folder and add three file postController.js, likeController.js,commentController.js and

add route handler code here.

Create models folder and add three file postModel.js, likeModel.js and commentModel.js and add your schema here.

Create routes folder and add one file blogRoute.js and add your route code here.

rewrite in prettier way

### Step-by-Step Instructions to Set Up an Express Server with MongoDB

### 1. Create Project Structure
Create a main project folder.
Inside this folder, create a file named index.js and include the following code to set up your Express server:

const express = require('express');
const dbConnect = require('./config/database.js'); // Make sure to implement this function
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect();

// Middleware for parsing JSON bodies
app.use(express.json());

// Mount route
app.use('/api/v1', require('./routes/blogRoute.js')); // Implement this route in the next steps

// Activate the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

### 2. Setup NPM and Install Necessary Packages
   
Open your terminal and execute the following commands:

**Initialize a new Node.js project:**


npm init -y
Install Express:

npm install express

***Install Mongoose for MongoDB interaction:**

npm install mongoose

**Install Nodemon for development (automatically restarts your server):**

npm install nodemon

**Update package.json to use Nodemon by modifying the "scripts" section:**

"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}

**Install dotenv for environment variable management:**

npm install dotenv

### 3. Create Environment Configuration

***Create a file named .env in the project root directory and add your MongoDB connection URL and desired port:**

MONGODB_URI=your_mongodb_connection_string
PORT=5000

### 4. Configure Database Connection

Create a folder named config and add a file named database.js. Implement the database connection logic inside this file:

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = dbConnect;

### 5. Create Controllers
Create a folder named controllers and add three files:

-> postController.js
-> likeController.js
-> commentController.js
You will implement route handler functions appropriate for each entity in each of these files.

6. Create Models
Create a folder named models and add three files:
postModel.js
likeModel.js
commentModel.js
Define your Mongoose schemas in each file. For example, in postModel.js:

javascript

Copy
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
Repeat similar structure for likeModel.js and commentModel.js.

7. Create Routes
Create a folder named routes and add a file named blogRoute.js. Set up your routes here, making sure to link to the controllers created earlier.

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define your routes
router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
// Add more routes as necessary

module.exports = router;

### Summary
You have now set up a basic project structure for an Express application connected to MongoDB.
You have initialized npm, installed dependencies, created configuration files, and set up controllers, models, and routes.
Don’t forget to implement the logic inside each controller and model file as needed for your application.


