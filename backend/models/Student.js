const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  class: String,
  bus_id: String
});

module.exports = mongoose.model('Student', StudentSchema);
