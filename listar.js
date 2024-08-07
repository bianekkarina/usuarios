let usuarios = require('./usuarios')

function listarUsuarios() {

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        console.log(`
        id: ${usuario.id},
        nome: ${usuario.nome},
        email: ${usuario.email},
        `);
            
    for (let j = 0; j < usuario.telefone.length; j++) {
        console.log(`
        ${j+1}. ${usuario.telefone[j]}`);
    }
    }
}

module.exports = listarUsuarios
