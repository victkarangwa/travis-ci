import express from 'express';
import faker from 'faker';
import users from './users';
import config from './config/default';

const app = express();

const { port } = config;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the WayFarer APIs');
});

app.use('/api/v1/users', users);
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

export default app;
