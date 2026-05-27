const express=require('express')
const app=express()
const handlebars=require('express-handlebars')
const Cadastro=require('./modules/Cadastro')
// config
    app.engine('handlebars', handlebars.engine({defaultLayout:'main',runtimeOptions: { allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true }}))
    app.set('view engine', 'handlebars')
    //body parse
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

//Rotas

 app.get('/', (req, res) => {
    res.render('home')
 })

 app.get('/cadastro', (req, res) => {
    res.render('formularios')
 })

 app.post('/add', (req, res) => {
    Cadastro.create({
        nome: req.body.nome,
        senha:req.body.senha
    }).then(() => {
        res.redirect('/users')
    }).catch((err) => {
        res.send('Erro ao realizar cadastro!'+err)
    })
 })
 
app.get('/users', (req, res) => {
    Cadastro.findAll({order: [['nome', 'ASC']]}).then((users) => {
        res.render('users', { users: users })
    })
})
 app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
 })