const Sequelize=require('sequelize')
const sequelize=new Sequelize('bancogreb','root','iral123',{
     host: 'localhost',
     dialect: 'mysql'})

 module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
 }
    