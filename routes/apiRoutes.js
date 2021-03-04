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

// router.post('/notes', (req, res) => {
//     Storage
//     .addNote()
//         .then((notes) => {
//             return res.json(notes);
//         })
//         .catch((err) => 
//             res.status(500).json(err));
// });

// remove method

// router.delete('/notes', (req, res) => {
//     Storage
//     .removeNote()
//         .then((notes) => {
//             return res.json(notes);
//         })
//         .catch((err) => 
//             res.status(500).json(err));
//     // .addNotes;
//     // .removeNotes;

// });

module.exports = router;