const db = require("./banco")

const Cadastros = db.sequelize.define('cadastros',{
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.TEXT
    }
})

Cadastros.sync({force:true})

module.exports = Cadastros