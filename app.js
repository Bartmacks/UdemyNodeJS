const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note.",
  handler: function () {
    console.log("Adding a new note!");
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note.",
  handler: function () {
    console.log("Removing the note.");
  },
});

yargs.command({
  command: "list",
  describe: "List your notes.",
  handler: function () {
    console.log("Listing out all notes.");
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading the note.");
  },
});

console.log(yargs.argv);
