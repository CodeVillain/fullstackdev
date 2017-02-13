const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.normalize(__dirname) + '/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get('/xkcd', (req, res) => {
  res.send({name: `${req.query.id}.png`});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
