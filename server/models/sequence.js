const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const sequenceSchema = new mongoose.Schema({
  maxDocumentId: {
    type: Number,
    required: true
  },
  maxMessageId: {
    type: Number
  },
  maxContactId: {
    type: Number
  }
});

module.exports = mongoose.model('Sequences', sequenceSchema)