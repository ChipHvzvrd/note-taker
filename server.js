const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const { note } = require('./public/models/Note');

app.get('/api/Note', (req, res) => {
    res.send('Some Data');
})

app.listen(PORT, ()=> {
    console.log(`server is now running`);
})