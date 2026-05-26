const Sequelize=require('sequelize')
const sequelize=new Sequelize('text','root','iral123',{
    host:'localhost',
    dialect:'mysql'
}) // conecta ao banco mysql


// Define o modelo de dados para postagens
const Postagem=sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING,
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force:true}) > comando para criar postagens
/*Postagem.create({
    titulo:"Victor",
    conteudo:"Este é o conteúdo da postagem."
})
    isso insere dados nas colunas    
*/
const Usuarios= sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})
Usuarios.create({
    nome:'iralberg',
    sobrenome:'silva',
    idade:25,
    email:'iralberg.silva@example.com'
})

sequelize.authenticate().then(function(){
    console.log('Conexão estabelecida com sucesso.')
}).catch(function(erro){
    console.error('Não foi possível conectar ao banco de dados:', erro)
})