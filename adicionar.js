let usuarios = require('./usuarios');

function adicionarUsuario(usuario) {
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
}

module.exports = adicionarUsuario;
