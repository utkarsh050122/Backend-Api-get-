const express = require('express');
const app = express();
const routes = require('./routes/routes')

const port = 3000;

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});