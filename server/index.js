const express = require('express');
const path = require('path');
const router = require('./route');
const app = express();
const cors = require('cors');


app.use(express.static(path.join(__dirname, '../Grouper', 'public')));
app.use(cors());

app.use('/', router);

app.listen(9000, console.log('Listening on port 9000'));