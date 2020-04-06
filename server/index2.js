import 'dotenv/config';

import express from 'express';
import logger from 'morgan';

import apiRouter from './route';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
  console.log(process.env.ENV);
});

module.exports = app;
