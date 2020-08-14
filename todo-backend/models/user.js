const mongoose = require("mongoose");
const validator = require('validator')
const Todo = require('./todo')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }],
  }, {
    timestamps: true
});

/* delete user tasks when user is deleted */
userSchema.pre('remove', async function (next) {
    const user = this

    await Todo.deleteMany({ owner: user._id })

    next()
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;