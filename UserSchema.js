const mongoose = require('mongoose')

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

const Lucas = mongoose.model('User')

new Lucas({
    nome: 'Lucas',
    sobrenome: 'Barbosa',
    email: 'a@a.com',
    idade: 22,
    pais: 'Brasil'
}).save().then(() => {
    console.log('salvou')
}).catch((e) => {
    console.log(e)
})