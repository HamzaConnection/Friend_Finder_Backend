const express = require('express');
const app = express();
const PORT = 3000;



app.get('/', function (req, res) {
  res.send('Friend Finder Demo!')
})

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})