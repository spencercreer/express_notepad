const router = require('express').Router();
const storage = require('../db/storage');

router.get('/notes', (req, res) => {
    storage
    .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => 
            res.status(500).json(err));
});

// post method
router.post('/notes', (req, res) => {
    
    storage
    .saveNote(req.body)
        .then((postNote) => {
            res.json(postNote);
        })
        .catch((err) => 
            res.status(500).json(err));
});

// remove method
router.delete('/notes/:id', (req, res) => {
    // is this correct?
    let deletedNote = req.params.id;

    storage
    .deleteNote(deletedNote)
        .then(() => {
            return res.json(deletedNote);
        })
        .catch((err) => 
            res.status(500).json(err));
});

module.exports = router;