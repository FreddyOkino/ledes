const express = require("express");
const router = express.Router()
const { verificar } = require('./../middleware/AutenticacaoMiddleware')
const perfilService = require('./../services/perfilService')


router.post('', async (req, res) => {
    try {

        const resposta = await perfilService.cadastrar(req.body)
        res.json(resposta)
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
}
)

router.get('', async (req, res) => {
    try {
        const resposta = await perfilService.buscarPorTodos()
        res.json(resposta)
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const resposta = await perfilService.buscarPorId(req.params.id)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
}
)
router.put('/:id', async (req, res) => {

    try {
        const resposta = await perfilService.editar(req.params.id, req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.put('/adm/:id', async (req, res) => {

    try {
        const resposta = await perfilService.atualizarAdm(req.params.id, req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})

router.get('',async (req,res)=>{
    try {
        const resposta = await perfilService.buscarPendentes(req.params.id)
        res.json(resposta)
    } catch (error) {
        console.log("router")
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const resposta = await perfilService.deletar(req.params.id)
        res.json(resposta)
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})

module.exports = router 
