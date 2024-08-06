const prompt = require('prompt-sync')();

const adicionarUsuario = require('./adicionar');
const listarUsuarios = require('./listar');
const editarUsuario = require('./editar');
const deletarUsuario = require('./deletar');

function exibirMenu() {
  console.log(`
      Bem Vindo ao Menu!
 1 - Adicionar um novo usuário
 2 - Listar todos os usuários
 3 - Atualizar um usuário
 4 - Deletar um usuário
 5 - Sair
  `)

  let escolha = prompt("Escolha uma opção: ")

  switch (escolha) {
    case '1':
        var nome = prompt("Informe o nome do usuário: ")
        var telefone = prompt("Informe o telefone: ")
        var email = prompt("Informe o email: ")
        
        adicionarUsuario({nome, telefone, email})
        console.log('Usuário cadastrado com sucesso!')
        exibirMenu()
        break
    case '2': 
        listarUsuarios()
        exibirMenu()
      break
    case '3':
        listarUsuarios();
        let id = parseInt(prompt('Escolha o usuário para editar: ')) 
        const novoNome = prompt('Novo nome: ');
        const novoTelefone = prompt('Novo telefone: ');
        const novoEmail = prompt('Novo email: ');

        editarUsuario(id, { nome: novoNome, telefone: novoTelefone, email: novoEmail });
        console.log('Usuário atualizado com sucesso!');
        exibirMenu();
        break;
    case '4':
        listarUsuarios()
        id = parseInt(prompt('Número do usuário a deletar: ')) 
        deletarUsuario(id);
        console.log('Usuário deletado com sucesso!');
        exibirMenu();
        break;
    case '5':
        console.log('Até a pŕoxima!')
        break
    default:
        throw new Error("Opção inválida!")
  }
}

exibirMenu()