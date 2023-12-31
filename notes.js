const chalk = import('chalk')
const yargs = require('yargs')
const fs = require('file-system')

getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  //const duplicateNotes = notes.filter ((note) => note.title === title)
  const duplicateNote = notes.find((note) => note.title === title)
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    console.log(notes.toString())
    saveNotes(notes)
    console.log('New note added') 
  } else {
    console.log('Note title taken!')
  }
}
const removeNote = (title) => {
  const notes = loadNotes()
  const uniqueNotes = notes.filter((note) => note.title !== title)
  console.log('unique notes: ' + uniqueNotes)
  saveNotes(uniqueNotes)
  }

const listNotes = () => {
  //console.log(chalk.yellow.bgBlue('Your Notes'))
  const allNotes = loadNotes()
  allNotes.forEach((note) => {
    console.log(note.title)
  })
}
const readNote = (title) => {
  const allNotes = loadNotes()
  const filteredNote = allNotes.find((note) =>  note.title === title)
  if(typeof filteredNote === "undefined"){
    console.log("There is no note to print")   
  }else {
    console.log('title: ' + filteredNote.title + ', body: '+ filteredNote.body)
  }
}
  
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
      const dataBuffer = fs.readFileSync("notes.json")
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
    console.log('empty notes')
    return []
  }
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}