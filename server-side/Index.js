const express = require('express');
const PORT = 3001;
const app = express();
const CNN = require('./models/Cnn');
const Responsaveis = require('./models/Responsaveis');
const Casas = require('./models/Casas');
const Consumos = require('./models/Consumo');
const ValorMetroCubico = require('./models/ValorMetroCubico');

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

app.post("/cadastrarCasa", async (req, res) => {
    let idResponsavel = req.body.idResponsavel;
    let endereco = req.body.endereco;

    const criarCasa = await Casas.create({idResponsavel, endereco}).then(response => {
        res.send({status: true, mensagem: "Casa cadastrada com sucesso!"});
    }).catch(erro => {
        res.send({status: false, mensagem: erro});
    })


})

app.get("/listarCasas", async (req, res) => {
    const listarCasas = await Casas.findAll();

    listarCasas ? (
        res.send({status: true, dados: listarCasas})
    ) : (
        res.send({status: false, mensagem: "Erro ao listar as casas!"})
    )
})

app.post("/cadastrarConsumo", async (req, res) => {
    let idCasa = req.body.idCasa;
    let idResponsavel = req.body.idResponsavel;
    let valorMetro = req.body.valorMetro
    let valorMesAtual = req.body.valorMesAtual

    console.log(idCasa, idResponsavel, valorMetro, valorMesAtual)
})

app.put("/editarValorMetroCubico", async (req, res) => {

    await ValorMetroCubico.update({ValorMetroCubico: req.body.valorMetroCubico}, {
        where: {
            idValorMetroCubico: 1
        }
    }).then(response => {
        res.send({status: true, mensagem: "Valor metro cubico foi atualizado!"});
    }).catch(erro => {
        res.send({status: false, mensagem: erro});
    })

})








app.listen(PORT, _ => {
    console.log(`Servidor rodando na porta: ${PORT}`); 
});
