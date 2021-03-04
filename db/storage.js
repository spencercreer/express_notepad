const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Storage {
    read(){
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note){
        return writeFileAsync('db/db.json', json.stringify(note));
    }
    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            console.log(parsedNotes)
            return parsedNotes;
        });
    }
    // addNotes
    addNotes(){
        return this.write().then((note) => {


        })
    }
    // removeNote
}

module.exports = new Storage;