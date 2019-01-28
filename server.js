const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;

const PORT = process.env.PORT || 3000;

//Database
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost/' + 'herokuTest';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//MiddleWare
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hello world');
})


app.listen(PORT, () => {
  console.log("listening on port: ", PORT)
})
