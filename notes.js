const fs = require('file-system')


const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return notes.title === title
  })
  
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added') 
  } else {
    console.log('Note title taken!')
  }
}

const removeNote = function (title) {
  const notes = loadNotes()
  notes.filter(function(e, i){
    if (notes[i].title != title)
    notes.push(notes[i])
  })
  saveNotes(notes)
  console.log(notes)
  }
  
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (notes) {
  try {
      const dataBuffer = fs.readFileSync(notes.json)
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
    console.log('empty notes')
    return []
  }
}
module.exports = {
  addNote : addNote,
  removeNote : removeNote
}