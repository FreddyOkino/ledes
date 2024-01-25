const bcrypt = require('bcrypt')
const perfilModel = require('../models/Perfil')
const perfilAtualizadoModel = require('../models/PerfilAtualizado')

module.exports = {
  buscarPorTodos: async () => {
    try {
      return await perfilModel.find()
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },
  buscarPorId: async (id) => {
    try {
      return await perfilModel.findOne({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  editar: async (id, perfil) => {
    try {
      const usuario = await perfilModel.findOne({ _id: id })
      const copia = usuario
      const busca = await perfilAtualizadoModel.findOne({ _id: id })
      console.log(busca)
      if (busca == null) {
        const novo = {
          _id: copia._id,
          nome: perfil.nome || copia.nome,
          cargo: perfil.cargo || copia.cargo,
          setor: perfil.setor || copia.setor,
          dataNascimento: perfil.dataNascimento || copia.dataNascimento,
          telefone: perfil.telefone || copia.telefone,
          modifacado: "pendente",
          id: copia.id,
          usuario: {
            email: copia.usuario.email
          },
          imagem: copia.imagem

        }
        return await perfilAtualizadoModel.create(novo)
      } else {

        return await perfilAtualizadoModel.updateOne({ _id: id }, perfil)
      }



    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  cadastrar: async (perfil) => {
    try {
      perfil.usuario.senha = await bcrypt.hash(perfil.usuario.senha, 10)
      let novoPerfil = await perfilModel.create(perfil)
      novoPerfil.usuario.senha = undefined
      return novoPerfil

    } catch (error) {
      throw { message: error.message, status: 500 }
    }

  },
  deletar: async (id) => {
    try {
      return await perfilModel.deleteOne({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }

}