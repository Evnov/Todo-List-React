//connecting to the database

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo-app", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true, //This is going to make sure that when Mongoose works with Mongo D.B. our indexes are created allowing us to quickly access the data we need to access.
  // useFindAndModify: false
});

mongoose.set("debug", true); //enable debugging information to be printed to the console for debugging purpose
mongoose.Promise = Promise; //set mongoose's Promise to use Node's Promise

module.exports.Todo = require("./todo");
