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

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

mongoose.model('User', UserSchema)

const User = mongoose.model('User')

new User({
    nome: 'Karen',
    sobrenome: 'Moraes',
    email: 'b@b.com',
    idade: 23,
    pais: 'Brasil'
}).save().then(() => {
    console.log('salvou')
}).catch((e) => {
    console.log(e)
})