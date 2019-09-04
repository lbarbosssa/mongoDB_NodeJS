/**
 * depois do / é o nome do banco, caso nao tenha o mongo cria, e só aparece quando tiver dados
 */
const mongoose = require('mongoose')

//Config mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/aprendendo', { useNewUrlParser: true }).then(() => {
    console.log('Cenectado')
}).catch((e) => {
    console.log(e)
})