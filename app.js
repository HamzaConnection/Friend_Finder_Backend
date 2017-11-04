const express = require('express');
const app = express();
const PORT = 3000;
let location = require('./models/Locations')
let facade = require('./facade/FriendFacade')



app.get('/', function (req, res, next) {
  res.send('Friend Finder Demo!')
  next();
})

app.post('/register', function (req, res, next) {
  res.send('Login!')
  facade.register(req.userName, req.coordinates, req.distance, function(err, docs) {
    if (err) {
      return console.log('error:' + err);
    }
    res.send({users: docs})
  });
    next();
  })




app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})