const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Storage {
    read(){
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note){
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    saveNote(postNote){

        return this.getNotes().then(allNotes => [...allNotes, postNote])
        .then((updatedNotes) => {
            let id = 1;
            for (let i = 0; i < updatedNotes.length; i++) {
                updatedNotes[i].id = id++;
            }
            return this.write(updatedNotes);
        })
        .then(() => postNote);
        
    }
    // deleteNote
    deleteNote(id){
        return this.getNotes().then((notes) => {
            const filteredNotes = notes.filter((note) => note.id !== parseInt(id));
            return this.write(filteredNotes);
        })
    }
}

module.exports = new Storage;