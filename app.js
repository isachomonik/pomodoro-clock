const express = require('express');

const app = express();

const IndexRouter = require('./routes/IndexRouter');

app.use('/', IndexRouter);

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)