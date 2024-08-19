let usuarios = require('./usuarios');

function editarUsuario(id, novoUsuario) {

   let mesmoEmail = usuarios.find(usuario => usuario.email === novoUsuario.email)
   if (mesmoEmail) {
      console.log("Erro: já existe um usuário com esse email!")
      return false
   }

   let index = usuarios.findIndex(usuario => usuario.id === id) 
   if (index !== -1) {
    usuarios[index] = {id: id, ...novoUsuario}
    console.log('Usuário atualizado com sucesso.');
   }
}

module.exports = editarUsuario
