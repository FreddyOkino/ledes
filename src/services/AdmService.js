const bcrypt = require('bcrypt')
const perfilModel = require('../models/Perfil')
const perfilAtualizadoModel = require('../models/PerfilAtualizado')

module.exports={
    atualizarAdm: async (id) => {
        const busca = await perfilAtualizadoModel.findOne({ _id: id })
        console.log(busca)
    
    
        busca.modifacado = "atualizado"
    
        const atualizar = await perfilModel.updateOne({ _id: id }, busca)
    
    
        await perfilAtualizadoModel.deleteOne({ _id: id })
    
      }, 

    buscarPendentes: async () => {
        try {
          return await perfilAtualizadoModel.find()
        } catch (error) {
          console.log("erro aqui")
        }
      },
}