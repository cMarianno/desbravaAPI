const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto')
const app = express();
const TabelaUser = require('./routes/siteClube/TabelaUser');
const Users = require('./routes/Users')
const moment = require('moment')

app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('O server esta rodando na porta 3000')
})

app.get('/login', async (req, res) => {
    const resultados = await TabelaUser.listar()
    res.status(200).send(
        resultados
    )
})

app.post('/validate_login', async (req, res) => {
    try{
        const resultados = await TabelaUser.validateLogin(req.body.username, crypto.createHash('md5').update(req.body.password).digest('hex'))
        resultados.password = req.body.password
        
        if(!resultados){
            res.status(404).send(
                "Este Usuário não Existe"
            )
        }else{
            res.status(202).send(
                resultados
            )
        }
    }catch(erro){
        res.status(406).send({mensagem: erro.message})
    }
})

app.post('/create', async (req, res) => {
    try{
        const dadosRecebidos = req.body;
        dadosRecebidos.date_added = moment().format('YYYY-MM-DD hh:mm:ss');
        dadosRecebidos.password = crypto.createHash('md5').update(dadosRecebidos.password).digest('hex')

        const users = new Users(dadosRecebidos)

        await users.criar()
        res.status(201).send(
            users
        )
    }catch(erro){
        res.status(406).send({mensagem: erro.message})
    }
})