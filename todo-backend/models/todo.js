const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {
      type: String,
      unique: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    time: {
      type: String,
      required: true,
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId, //user ObjectId
    //   required: false,
    //   ref: 'User' //refer User model
    // }
}, {
  timestamps: true
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
