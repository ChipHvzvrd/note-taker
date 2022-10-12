const fs = require('fs');
const path = require('path');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

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

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './public/data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.entry || typeof note.entry !== 'string') {
        return false;
    }
    return true;
};

app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

app.listen(PORT, ()=> {
    console.log(`server is now running`);
});