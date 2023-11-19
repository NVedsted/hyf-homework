const notes = [];

function saveNote(content, id) {
    notes.push({content, id, created: new Date(), modified: new Date()});
}

function getNote(id) {
    for (const note of notes) {
        if (note.id === id) {
            return note;
        }
    }

    console.log(`Failed to find note with index "${id}"`);
    return null;
}

function updateNote(id, content) {
    for (const note of notes) {
        if (note.id === id) {
            note.content = content;
            note.modified = new Date();
        }
    }
}

function logOutNotesFormatted() {
    for (const note of notes) {
        console.log(`The note with ID ${note.id} has the following note text: ${note.content} (Created on ${note.created.toISOString()}, last modified on ${note.created.toISOString()})`);
    }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

updateNote(2, "Do all the laundry");
logOutNotesFormatted(); // should log out the text below