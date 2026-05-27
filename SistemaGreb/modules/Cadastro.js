const db=require('./db')

 const Cadastro=db.sequelize.define('users', {
         
         nome: {
             type: db.Sequelize.STRING,
             allowNull: false
         },
        senha:{
            type: db.Sequelize.STRING,
            allowNull: false
        }
     })

   //  Cadastro.sync({force: true})

   module.exports=Cadastro