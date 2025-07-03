const mongoose = require('mongoose');
const joyaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        length: 100,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        lenght: 200,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 10,
    }
    // imagenUrl: {
    //     type: String,
    //     required: true
    // }
})


const joyaModel = mongoose.model('joyas', joyaSchema);

module.exports = joyaModel;