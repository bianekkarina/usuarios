let usuarios = require('./usuarios')

function listarUsuarios() {

    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        console.log(`
        ID: ${usuario.id},
        Nome: ${usuario.nome},
        Email: ${usuario.email},
        `);
            
        for (let j = 0; j < usuario.telefones.length; j++) {
            console.log(`
            ${j+1} - ${usuario.telefones[j]}`);
        }
    }
}

module.exports = listarUsuarios
