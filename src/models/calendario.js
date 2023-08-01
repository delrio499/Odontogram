const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citas = new Schema({

    fecha:Date,
    nombre:String,
    hora:String,
    doctor:String
});



module.exports = mongoose.model('citas', citas);