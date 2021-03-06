const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/salon',{useNewUrlParser:true, useUnifiedTopology: true});

const Style = mongoose.model('Style',{

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image:  {
        type: String,
        require: true
    },
    count: {
        type: Number,
        require: true
    }
});

module.exports = Style;