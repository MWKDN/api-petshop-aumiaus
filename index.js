// Importa o framework Express (a ferramenta que cria o servidor)
const express = require('express');

// Cria a aplicação do Express
const app = express();

// Define a porta onde a API vai rodar e a define como porta 3000
const port = 3000;

// Determina a estrutura de Dados listando os serviços do Pet Shop
var servicos = [
  { id: 1, nome: "Banho e Tosa", descricao: "Banho completo para cães e gatos." },
  { id: 2, nome: "Consulta Veterinária", descricao: "Atendimento clínico para pets." }
];
// Endpoints da API do Pet Shop AuMiaus

// Retorna a mensagem de boas-vindas na página inicial ('/')
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Pet Shop AuMiaus!');
});

// Lista os serviços cadastrados no Pet Shop AuMiaus na rota '/servicos'
app.get('/servicos', (req, res) => {
  res.json(servicos); // Usa .json() para enviar a lista formatada
});

// INICIALIZAÇÃO DO SERVIDOR
// Inicializa o servidor na porta 3000
app.listen(port, () => {
  console.log(`API do Pet Shop AuMiaus rodando em http://localhost:${port}`);
});