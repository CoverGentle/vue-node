const  mongoose  = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String }
})
module.exports = mongoose.model('Category',Schema)