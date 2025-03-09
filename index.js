const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 0;

//middleware parse json data
app.use(express.json());
//
const blog = require("./routes/blogRoute");
app.use("/api/v1", blog);

//connect with database
const dbConnect = require("./config/database");
dbConnect();

//activated the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is my Home Page</h1>`);
});
