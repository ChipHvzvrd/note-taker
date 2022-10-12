const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const { notes } = require('./public/data/notes');

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(notes => notes.title === query.title);
    }
    if (query.entry) {
        filteredResults = filteredResults.filter(notes => notes.entry === query.entry);
    }

    return filteredResults;
};

app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results)
});

app.get('/api/notes/id:', (req, res) => {
    const result = findById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.listen(PORT, ()=> {
    console.log(`server is now running`);
});