const express = require('express');
const bodyParser = require('body-parser');
const handleErrors = require('./middleware/handleErrors');
const { BadRequest } = require('./utils/errors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Express Middleware Demo 😄');
});

app.post('/post', async (req, res, next) => {
  const { title, author } = req.body;

  try {
    if (!title || !author) {
      throw new BadRequest('Missing required fields: title or author');
    }
    const post = await db.post.insert({ title, author });
    res.json(post);
  } catch (err) {
    next(err)
  }
});

app.use(handleErrors);

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`));