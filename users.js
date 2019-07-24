import express from 'express';
import status from './constants/StatusCode';

const router = express.Router();

const users = [
  {
    id: 10,
    name: 'victor',
    reg: 218000208,
  },
  {
    id: 2,
    name: 'Emmanuel',
    reg: 218010269,
  },
  {
    id: 3,
    name: 'Schadrack',
    reg: 218004887,
  },
];

router.get('/', (req, res) => {
  res.status(status.REQUEST_SUCCEDED).send(users);
});


export default router;
