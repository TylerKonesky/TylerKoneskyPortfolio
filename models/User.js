const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    userEmail: String, 
    isAdmin: {type: Boolean, default: false}
})

mongoose.model('users', userSchema);