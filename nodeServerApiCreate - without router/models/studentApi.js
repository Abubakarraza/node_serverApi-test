const mongoose = require('mongoose');
const validator = require('validator');
const validation = new mongoose.Schema({
    name: String,
    rollNo: {
        type:Number,
        unique:true,
        required:true,
        min:5
    },
    // email: String
    email: {
        type: String,
        required:true,
        unique:[true,"email is already taken"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");


            }
        }

    }
});
const studentApi = new mongoose.model("students", validation);
module.exports = studentApi;