const express = require("express")
const perfilRoute = require("./routes/PerfilRoute")
const loginRoute = require('./routes/LoginRoute')
const admRoute = require('./routes/AdmRoute')



const cors = require('cors')
const api = express()
require("./db")
api.use(express.json())
api.use(
  cors({
    origin: "*"
  })
)

api.use('/perfil', perfilRoute)
api.use('/login', loginRoute)
api.use('/adm', admRoute)

// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao CRACHA VIRTUAL API')
})

module.exports = api