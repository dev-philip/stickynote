import './scss/style.scss';
import NoteManager from "../src/NoteManager";

const noteManager = new NoteManager({
    el: document.querySelector('.tc-notes'),
    notes: [
        {
            title: 'Sticky Note',
            body: 'It Made With Vanilla Javascript'
        },
        {
            title: 'This Is Title',
            body: 'This is Body'
        }, 
        {
            title: 'Click New Note ',
            body: 'It would create an empty note'
        },
        {
            title: 'The Note Are Editable',
            body: 'Click on a note to make correction'
        },
    ]
});

noteManager.onNewNote = (noteObj) =>{
    console.log(noteObj);
}

noteManager.onNoteChange = (noteObj) => {
    console.log(noteObj);
}

noteManager.onNewRemove = () => {

}


const newNoteBtn = document.querySelector('.new-note-btn');
newNoteBtn.onclick = () => {
    noteManager.prependNote({
        title: '',
        body: ''
    });
}

