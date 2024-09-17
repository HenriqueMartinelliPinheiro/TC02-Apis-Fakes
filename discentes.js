const express = require('express');
const discentesRouter = express.Router();

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
  },
  {
    "ano-ingresso": 2021,
    "cpf-cnpj": "11122233344",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente3@exemplo.com",
    "id-curso": 1,
    "id-discente": 3,
    "id-forma-ingresso": 1,
    "id-institucional": 54321,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente3",
    "matricula": 20210001,
    "nome-curso": "Engenharia de Software",
    "nome-discente": "Ana Pereira",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2020,
    "cpf-cnpj": "55566677788",
    "descricao-forma-ingresso": "Enem",
    "email": "discente4@exemplo.com",
    "id-curso": 2,
    "id-discente": 4,
    "id-forma-ingresso": 2,
    "id-institucional": 98765,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente4",
    "matricula": 20200002,
    "nome-curso": "Direito",
    "nome-discente": "Lucas Costa",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2018,
    "cpf-cnpj": "88899900011",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente5@exemplo.com",
    "id-curso": 1,
    "id-discente": 5,
    "id-forma-ingresso": 1,
    "id-institucional": 11223,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente5",
    "matricula": 20180001,
    "nome-curso": "Engenharia de Software",
    "nome-discente": "Roberto Lima",
    "periodo-ingresso": 2,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2019,
    "cpf-cnpj": "00011122233",
    "descricao-forma-ingresso": "Enem",
    "email": "discente6@exemplo.com",
    "id-curso": 2,
    "id-discente": 6,
    "id-forma-ingresso": 2,
    "id-institucional": 22334,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente6",
    "matricula": 20190003,
    "nome-curso": "Direito",
    "nome-discente": "Fernanda Almeida",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  }
];

discentesRouter.get('/discentes', (req, res) => {
  const { nomeDiscente, matricula, idCurso, limit, offset } = req.query;
  let filteredDiscentes = discentes;

  if (nomeDiscente) {
    filteredDiscentes = filteredDiscentes.filter(d => d['nome-discente'].includes(nomeDiscente));
  }

  if (matricula) {
    filteredDiscentes = filteredDiscentes.filter(d => d.matricula == matricula);
  }

  if (idCurso) {
    filteredDiscentes = filteredDiscentes.filter(d => d['id-curso'] == idCurso);
  }

  res.json(filteredDiscentes.slice(offset || 0, (offset || 0) + (limit || filteredDiscentes.length)));
});

module.exports = discentesRouter;
