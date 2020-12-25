const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Express Middleware Demo 😄');
});


app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`));