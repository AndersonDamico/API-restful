
const express = require('express')
const cors = require ('cors')


const db = require('./database/db')
const routes = require ('./routes/routes')

const app = express()
 
//db conexão com o banco de dados
db.connect ()

//endereços permitidos para consumo da API
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

//habillitar CORS    
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true
   

        //mobile app
        if (!origin) allowed = true
        if (!allowedOrigins.includes(origin)) allowed = false

        callback (null, allowed)

     }
}))

// habilita server para receber dados via post (formulário)
//app.use(express.urlencoded({ extended: true }))

//habilita server para receber dados jason
app.use(express.json())

//definindo as rotas
app.use ('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))