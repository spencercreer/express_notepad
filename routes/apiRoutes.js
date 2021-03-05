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
    let postNote = req.body;

    storage
    .saveNote(postNote)
        .then(() => {
            return res.json(postNote);
        })
        .catch((err) => 
            res.status(500).json(err));
});

// remove method
router.delete('/notes', (req, res) => {
    // is this correct?
    let deletedNote = req;

    storage
    .deleteNote(deletedNote)
        .then(() => {
            return deletedNote;
        })
        .catch((err) => 
            res.status(500).json(err));
});

module.exports = router;