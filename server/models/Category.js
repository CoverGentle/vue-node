const  mongoose  = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String },
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})
module.exports = mongoose.model('Category',Schema)