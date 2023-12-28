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
            console.log('Title', argv.title)
            console.log('Body', argv.body)
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