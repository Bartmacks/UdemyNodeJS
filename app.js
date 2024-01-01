const chalk = import('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }

        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    
       yargs.command({
        command: 'remove',
        describe: 'Remove a  note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        
        handler: function (argv) {
            notes.removeNote(argv.title)
        }
    })
    
    yargs.command({
        command: 'list',
        describe: 'List yout notes',
        handler: function () {
            notes.listNotes()
        }
    })
    
    
    
        yargs.command({
        command: 'readNote',
        describe: 'Read a note',
        builder: {
            title: {
                describe:"note title",
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.readNote(argv.title)
        }
    })
    
    yargs.parse()