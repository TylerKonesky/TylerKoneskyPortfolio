const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    tags: {any: Array},
    description: String,
    image: {type: String, default: ''},
    subImage1: {type: String, default: ''},
    subImage2: {type: String, default: ''},
    subImage3: {type: String, default: ''},
})

mongoose.model('projects', projectSchema);