const express = require('express');

// event emmiters
// stream
// clusters

const app = express();

app.use(express.static('client'));
// app.get('/', (req, res) => {
// });

app.listen(8080);
