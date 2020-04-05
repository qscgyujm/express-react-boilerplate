import express from 'express';

import apiRouter from './route';

const app = express();

const port = process.env.PORT || 3000;

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = app;
