const  mongoose  = require("mongoose");

const Schema = new mongoose.Schema({
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    title: { type: String },
    body: { type: String },

})
module.exports = mongoose.model('Article',Schema)