const bcrypt = require('bcrypt')
const perfilModel = require('../models/Perfil')


module.exports = {
  atualizarAdm: async (id) => {
    const busca = await perfilModel.findOne({ _id:id })

    busca.modifacado = "atualizado"
    return await perfilModel.updateOne({ _id: id }, busca)
  },

  rejeitar: async (id) => {
    const busca = await perfilModel.findOne({ _id:id })

    busca.modifacado = "rejeitado"
    return await perfilModel.updateOne({ _id: id }, busca)
  },

  buscarPendentes: async () => {
    try {
      return await perfilModel.find({ modifacado : "pendente" })
    } catch (error) {
      console.log("erro aqui")
    }
  },
}