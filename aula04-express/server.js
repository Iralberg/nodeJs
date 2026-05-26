//SEVER
const express= require("express")
const app=express()
// get() > caminho de rotas
//listen() > roda o servidor
// __dirname > leva para o arquivo rais
//sendFile() para enviar arquivos
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})
app.get('/sobre', (req, res) => {
  res.send('Página sobre')
})

app.get('/blog',(req,res) =>{
  res.send('Página do blog')
})

//  /:parametro >serve para criar parametros
//  req.params > pega os parametros
app.get('/ola/:nome/:cargo',(req,res)=>{
  res.send(`<h1>ola ${req.params.nome}! você é ${req.params.cargo}</h1>`) 
})
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando')
})