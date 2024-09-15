const express = require('express');
const discentesRouter = express.Router();

// Dados de exemplo para Discentes
const discentes = [
  {
    "ano-ingresso": 2020,
    "cpf-cnpj": "12345678900",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente1@exemplo.com",
    "id-curso": 1,
    "id-discente": 1,
    "id-forma-ingresso": 1,
    "id-institucional": 12345,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente1",
    "matricula": 20200001,
    "nome-curso": "Engenharia de Software",
    "nome-discente": "Maria Silva",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2019,
    "cpf-cnpj": "98765432100",
    "descricao-forma-ingresso": "Enem",
    "email": "discente2@exemplo.com",
    "id-curso": 2,
    "id-discente": 2,
    "id-forma-ingresso": 2,
    "id-institucional": 67890,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente2",
    "matricula": 20190002,
    "nome-curso": "Direito",
    "nome-discente": "João Souza",
    "periodo-ingresso": 2,
    "sigla-nivel": "GR"
  }
];

// Endpoint de GET para Discentes
discentesRouter.get('/discentes', (req, res) => {
  const { nomeDiscente, matricula, idCurso, limit, offset } = req.query;
  let filteredDiscentes = discentes;

  // Filtro por nome do discente
  if (nomeDiscente) {
    filteredDiscentes = filteredDiscentes.filter(d => d['nome-discente'].includes(nomeDiscente));
  }

  // Filtro por matrícula
  if (matricula) {
    filteredDiscentes = filteredDiscentes.filter(d => d.matricula == matricula);
  }

  // Filtro por id do curso
  if (idCurso) {
    filteredDiscentes = filteredDiscentes.filter(d => d['id-curso'] == idCurso);
  }

  // Paginação
  res.json(filteredDiscentes.slice(offset || 0, (offset || 0) + (limit || filteredDiscentes.length)));
});

module.exports = discentesRouter;
