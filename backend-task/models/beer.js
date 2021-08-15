const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beerSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    type: {
        type: String,
        required: true,
    },
    rating:{
        type: Array,
        min: 1,
        max: 5
    }
    },
    {
        timestamps: true
    })
  
const Beer = mongoose.model('Beer', beerSchema)
module.exports = Beer