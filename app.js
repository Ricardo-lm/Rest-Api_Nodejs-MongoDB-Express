const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); // with body-parse we assure that the info is delivered correctly and we can use it.

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

//Conect to DB
mongoose.connect(
    process.env.DB_CONNECTION,  
    { useNewUrlParser: true,
      useUnifiedTopology: true,  
    },
    () => console.log('Connected to DB!')
);

//how to we start listening to the server 
app.listen('3000');