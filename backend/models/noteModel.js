const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    usr_id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
},
    {
        timestamps:true
})

module.exports = mongoose.model('Notes',noteSchema)