const express = require('express');
const PORT = 3001;
const app = express();
const CNN = require('./models/Cnn');
const Responsaveis = require('./models/Responsaveis');

app.use(express.json());

app.post("/cadastrarResponsavel", async (req, res) => {

    let nomeResponsavel = req.body.nomeResponsavel;

    const criarResponsavel = await Responsaveis.create({ nomeResponsavel });

    criarResponsavel ? (
        res.send({status: true, mensagem: "Responsavel Cadastrado com sucesso!"})
    ) : (
        res.send({status: false, mensagem: "Erro ao cadastrar responsavel"})
    )
});

app.get("/listarResponsaveis", async (req, res) => {
    const listaResponsaveis = await Responsaveis.findAll();

    listaResponsaveis ? (
        res.send({status: true, dados: listaResponsaveis})
    ) : (
        res.send({status: false, mensagem: "Erro ao listar os responsáveis"})
    )

    
})

app.listen(PORT, _ => {
    console.log(`Servidor rodando na porta: ${PORT}`); 
});
