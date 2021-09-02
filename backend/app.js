const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Request-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, DELETE, OPTIONS")
  next();
});


app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.get('/api/posts',(req, res, next) => {
  posts = [
    {
      id: '12j2j12ed',
      title: 'This first is a title',
      content: 'this first is a content'
     },
     {
      id: '22j2j12ed',
      title: 'This second is a title',
      content: 'this second is a content'
     }
  ]
  res.status(200).json({
    message: 'Post fetch successfully',
    posts: posts
  });
});


module.exports = app;
