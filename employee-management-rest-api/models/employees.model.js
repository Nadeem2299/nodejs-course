// importing mongo connections stuff
const mongoose = require('./mongo')

// let's have schema here for the collection
// building a collection with field and datatype
const Employee = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    ceatedBy: String,
    createdOn: {type: Date, default: Date.now},
    updatedBy: String,
    updatedOn: {type: Date, default: Date.now}
}, {
    strict: false
})

module.exports = mongoose.model('Employee', Employee);

// we should export schema