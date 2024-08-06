let usuarios = require('./usuarios');

function listarUsuarios() {
    if (usuarios.length === 0) {
        throw new Error("Nada aqui")
    } else {
        usuarios.forEach(usuario => {
            console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Telefone: ${usuario.telefone}, Email: ${usuario.email}`)
        })
    }
}

module.exports = listarUsuarios
