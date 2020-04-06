import express from 'express';
import cors from 'cors';

const router = express.Router();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  exposedHeaders: ['Content-Type', 'Authorization', 'token'],
};

/* GET home page. */
router.get('/', cors(corsOptions), (req, res) => {
  res.send('POS API');
});

export default router;
