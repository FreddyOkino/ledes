const express = require("express");
const router = express.Router()
const admService = require('../services/AdmService')




// Rotas

router.put('/:id', async (req, res) => {

    try {
        const resposta = await admService.atualizarAdm(req.params.id, req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.get('',async(req,res)=>{
    try {
        const resposta = await admService.buscarPendentes()
        res.json(resposta)
    } catch (error) {
        
    }
})

module.exports = router