const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({    //this sets the way the data is shown, the schema.
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posts', PostSchema); //this is the name of the db that you will see on mlab and the name of the schema.