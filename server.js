const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const { note } = require('./public/models/Note');

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

app.get('/api/notes', (req, res) => {
    res.send('Some Data');
})

app.get('/api/notes/id:', (req, res) => {
    const result = findById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

app.listen(PORT, ()=> {
    console.log(`server is now running`);
})