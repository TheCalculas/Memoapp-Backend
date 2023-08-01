let mongoose = require("mongoose");

let NotesSchema = new mongoose.Schema({
  user: {
    // ab isme ek foreign key associate ho chuki hai
    type: mongoose.Schema.Types.ObjectId,
    // and the reference is of the schema of user
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
