const express = require('express');
const PORT = 3001;
const app = express();
const CNN = require('./models/Cnn');
const responsaveis = require('./models/Responsaveis');

app.use(express.json());

app.get("/helloworld", async (req, res) => {
    res.send({status: true, mensagem: "Essa rota funcionou!"});
});

app.listen(PORT, _ => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
