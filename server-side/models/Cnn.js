const {Sequelize} = require('sequelize');
const CNN = new Sequelize (
    "rateiogas", 
    "root",
    "fiscaltecti",
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql"
    }
);

try {
    CNN.authenticate().then(error => {
        if (error) {
            throw error;
        }
        CNN.sync()
    });
    console.log("Conectado com succeso!");
} catch {
    console.log("Erro ao conectar com o banco de dados");
}

module.exports = CNN;