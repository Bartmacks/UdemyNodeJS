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
            console.log('Listing out all noets')
        }
    })
    
    
    
        yargs.command({
        command: 'read',
        describe: 'Read a note',

        handler: function (argv) {
            console.log('Adding a new note', argv)
        }
    })
    
    yargs.parse()