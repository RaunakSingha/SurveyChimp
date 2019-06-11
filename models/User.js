const mongoose = require('mongoose');
const Schema = mongoose.Schema; // destructuring equivalent: { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});

mongoose.model('users', userSchema)