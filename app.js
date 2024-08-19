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
        let nome = prompt("Informe o nome do usuário: ")
        var telefones = []
        var telefone
        while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
            }
        let email = prompt("Informe o email: ")
        
        adicionarUsuario({nome, telefones, email})
        console.log('Usuário cadastrado com sucesso!')
        exibirMenu()
        break
    case '2': 
        listarUsuarios()
        exibirMenu()
      break
    case '3':
        listarUsuarios();
        var id = parseInt(prompt('Escolha um usuário para editar: ')) 
        let novoNome = prompt('Novo nome: ');
        let novoTelefone
        let novosTelefones = []
        while ((novoTelefone = prompt('Novo telefone: '))) {
            novosTelefones.push(novoTelefone)
        };
        let novoEmail = prompt('Novo email: ');

        editarUsuario(id, { nome: novoNome, telefones: novosTelefones, email: novoEmail });
        exibirMenu();
        break;
    case '4':
        listarUsuarios()
        id = parseInt(prompt('Número do usuário a deletar: ')) 
        let confirmacao = prompt("Tem certeza que deseja remover? (sim/nao): ")
        deletarUsuario(id, confirmacao);
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
