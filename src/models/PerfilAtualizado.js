const mongoose = require('mongoose')
const { Schema } = mongoose

const perfilAtualizadoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: false
    },
    setor: {
        type: String,
        required: false
    },
    dataNascimento: {
        type: Date,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    modifacado: {
        type: String
    },






},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('PerfilAtualizado', perfilAtualizadoSchema)