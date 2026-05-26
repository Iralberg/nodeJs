let http=require('http') //importando modulo http
//http.createServer() > cria servidor
//listen() criar a porta do servidor

 http.createServer((req,res)=>{
    res.end( 'hello word')
 }).listen(8081);
console.log('Servidor rodando na porta 8081')