let usuarios = require('./usuarios')

function adicionarUsuario(usuario) {
    usuario.id = usuarios.length + 1

    let jaExiste = usuarios.find(usu => usu.email === usuario.email)
    if (jaExiste) {
        throw new Error("Já existe um usuário com esse email!")
    } else {
    usuarios.push(usuario)
    }
}

module.exports = adicionarUsuario
