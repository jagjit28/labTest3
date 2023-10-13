require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const Book = require('./models/bookModels')
const app = express();
const fs = require('fs');
app.set('view engine', 'ejs')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
  const book = await Book.find({});
  res.render('index',{book})
})

app.get('/getSingleData', async(req, res) => {

  const book = await Book.find({author: req.query.author});
  res.render('findByData',{book})
})

app.post('/books', async (req, res) => {
  var myData = new Book(req.body);
  try{
    await myData.save()
    console.log("data saved")
  }catch{
    console.log("data not saved")
  }
  res.redirect('/');
})


module.exports = app;