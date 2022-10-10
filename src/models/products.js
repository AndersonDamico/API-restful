const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    brand:Number,
    prince:String,

})

const model= mongoose.model ('products', schema)

module.exports =model