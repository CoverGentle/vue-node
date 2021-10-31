const mongose = require("mongoose")

module.exports= app =>{
    mongose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser:true,
    })
    
}