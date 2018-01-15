const express = require('express');
const app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html", (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/data', (req, res) => {
  res.json(jsonData);
});

var port = 3000;
app.listen(port, () => (console.log("listening on port", port)));