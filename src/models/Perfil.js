const mongoose= require('mongoose')
const { Schema } = mongoose

const perfilSchema = new Schema({
    nome : {
        type : String,
        required: true
    },
    cargo:{
        type:String,
        required:false
    },
    setor:{
        type: String,
        required: false
    },
    id:{
        type:String,
        required:false
    },
    dataNascimento: {
        type: Date,
        required:false
    },
    telefone:{
        type:Number,
        required:false
    },
    usuario:{
        email:{type: String, required:true,unique:true },
        senha:{type: String, required:true, select:false}
    },
    modifacado:{
        type:String,
        default:"criado"
    },
    imagem:{
        type:String
    }

    
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Perfil', perfilSchema)