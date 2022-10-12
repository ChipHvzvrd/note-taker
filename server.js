const express = require('express');

const app = express();

const { note } = require('./public/models/Note');

app.get('/api/Note', (req, res) => {
    res.send('Some Data');
})

app.listen(3001, ()=> {
    console.log(`server is now running`);
})