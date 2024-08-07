let usuarios = require('./usuarios')

function editarUsuario(id, novoUsuario) {
   let index = usuarios.findIndex(usuario => usuario.id === id) 
   if (index !== -1) {
    usuarios[index] = {id: id, ...novoUsuario}
   }
}

module.exports = editarUsuario
