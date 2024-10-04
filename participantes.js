const express = require('express');
const participantesRouter = express.Router();

const participantes = [
  {
    "id-turma": 1,
    "id-institucional": 12345,
    "id-tipo-participante": 1,
    "cpf-cnpj": "12345678900",
    "id-lotacao": 101,
    "identificador": 20210001,
    "nome": "Maria Silva",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 1,
    "id-institucional": 67890,
    "id-tipo-participante": 2,
    "cpf-cnpj": "98765432100",
    "id-lotacao": 102,
    "identificador": 20210002,
    "nome": "João Souza",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 2,
    "id-institucional": 54321,
    "id-tipo-participante": 1,
    "cpf-cnpj": "11122233344",
    "id-lotacao": 103,
    "identificador": 20220001,
    "nome": "Ana Pereira",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 3,
    "id-institucional": 23456,
    "id-tipo-participante": 1,
    "cpf-cnpj": "22233344455",
    "id-lotacao": 104,
    "identificador": 20230001,
    "nome": "Carlos Santana",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 4,
    "id-institucional": 98765,
    "id-tipo-participante": 2,
    "cpf-cnpj": "33344455566",
    "id-lotacao": 105,
    "identificador": 20230002,
    "nome": "Patrícia Almeida",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 5,
    "id-institucional": 65432,
    "id-tipo-participante": 1,
    "cpf-cnpj": "44455566677",
    "id-lotacao": 106,
    "identificador": 20240001,
    "nome": "Lucas Moura",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 6,
    "id-institucional": 87654,
    "id-tipo-participante": 2,
    "cpf-cnpj": "55566677788",
    "id-lotacao": 107,
    "identificador": 20240002,
    "nome": "Fernanda Oliveira",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 7,
    "id-institucional": 34567,
    "id-tipo-participante": 1,
    "cpf-cnpj": "66677788899",
    "id-lotacao": 108,
    "identificador": 20240003,
    "nome": "Rafael Castro",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 8,
    "id-institucional": 76543,
    "id-tipo-participante": 2,
    "cpf-cnpj": "77788899900",
    "id-lotacao": 109,
    "identificador": 20240004,
    "nome": "Bianca Ribeiro",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 9,
    "id-institucional": 45678,
    "id-tipo-participante": 1,
    "cpf-cnpj": "88899900011",
    "id-lotacao": 110,
    "identificador": 20240005,
    "nome": "Eduardo Lopes",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 10,
    "id-institucional": 65431,
    "id-tipo-participante": 2,
    "cpf-cnpj": "99900011122",
    "id-lotacao": 111,
    "identificador": 20240006,
    "nome": "Juliana Costa",
    "turmas-agrupadas": true
  },
  // Mais 40 participantes para completar os 50
  {
    "id-turma": 3,
    "id-institucional": 54322,
    "id-tipo-participante": 1,
    "cpf-cnpj": "10101010101",
    "id-lotacao": 112,
    "identificador": 20240007,
    "nome": "Gustavo Nunes",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 4,
    "id-institucional": 43210,
    "id-tipo-participante": 2,
    "cpf-cnpj": "11111111111",
    "id-lotacao": 113,
    "identificador": 20240008,
    "nome": "Lívia Freitas",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 5,
    "id-institucional": 32109,
    "id-tipo-participante": 1,
    "cpf-cnpj": "12121212121",
    "id-lotacao": 114,
    "identificador": 20240009,
    "nome": "Pedro Martins",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 6,
    "id-institucional": 21098,
    "id-tipo-participante": 2,
    "cpf-cnpj": "13131313131",
    "id-lotacao": 115,
    "identificador": 20240010,
    "nome": "Vanessa Lima",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 7,
    "id-institucional": 10987,
    "id-tipo-participante": 1,
    "cpf-cnpj": "14141414141",
    "id-lotacao": 116,
    "identificador": 20240011,
    "nome": "Marcelo Santos",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 8,
    "id-institucional": 98765,
    "id-tipo-participante": 2,
    "cpf-cnpj": "15151515151",
    "id-lotacao": 117,
    "identificador": 20240012,
    "nome": "Cláudia Rocha",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 9,
    "id-institucional": 87654,
    "id-tipo-participante": 1,
    "cpf-cnpj": "16161616161",
    "id-lotacao": 118,
    "identificador": 20240013,
    "nome": "Fábio Lima",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 10,
    "id-institucional": 76543,
    "id-tipo-participante": 2,
    "cpf-cnpj": "17171717171",
    "id-lotacao": 119,
    "identificador": 20240014,
    "nome": "Paula Vieira",
    "turmas-agrupadas": false
  },
  {
    "id-turma": 1,
    "id-institucional": 65432,
    "id-tipo-participante": 1,
    "cpf-cnpj": "18181818181",
    "id-lotacao": 120,
    "identificador": 20240015,
    "nome": "Rodrigo Carvalho",
    "turmas-agrupadas": true
  },
  {
    "id-turma": 2,
    "id-institucional": 54321,
    "id-tipo-participante": 2,
    "cpf-cnpj": "19191919191",
    "id-lotacao": 121,
    "identificador": 20240016,
    "nome": "Cecília Duarte",
    "turmas-agrupadas": false
  }
];

participantesRouter.get('/participantes', (req, res) => {
  const {
    'id-turma': idTurma,
    'id-institucional': idInstitucional,
    'id-tipo-participante': idTipoParticipante,
    'cpf-cnpj': cpfCnpj,
    'id-lotacao': idLotacao,
    identificador,
    nome,
    'turmas-agrupadas': turmasAgrupadas,
    limit,
    offset,
    'order-asc': orderAsc,
    'order-desc': orderDesc
  } = req.query;

  let filteredParticipantes = participantes;

  if (idTurma) {
    filteredParticipantes = filteredParticipantes.filter(p => p['id-turma'] == idTurma);
  }

  if (idInstitucional) {
    filteredParticipantes = filteredParticipantes.filter(p => p['id-institucional'] == idInstitucional);
  }

  if (idTipoParticipante) {
    filteredParticipantes = filteredParticipantes.filter(p => p['id-tipo-participante'] == idTipoParticipante);
  }

  if (cpfCnpj) {
    filteredParticipantes = filteredParticipantes.filter(p => p['cpf-cnpj'] === cpfCnpj);
  }

  if (idLotacao) {
    filteredParticipantes = filteredParticipantes.filter(p => p['id-lotacao'] == idLotacao);
  }

  if (identificador) {
    filteredParticipantes = filteredParticipantes.filter(p => p.identificador == identificador);
  }

  if (nome) {
    filteredParticipantes = filteredParticipantes.filter(p => p.nome.includes(nome));
  }

  if (turmasAgrupadas !== undefined) {
    filteredParticipantes = filteredParticipantes.filter(p => p['turmas-agrupadas'] == JSON.parse(turmasAgrupadas));
  }

  if (orderAsc) {
    filteredParticipantes = filteredParticipantes.sort((a, b) => (a[orderAsc] > b[orderAsc]) ? 1 : -1);
  } else if (orderDesc) {
    filteredParticipantes = filteredParticipantes.sort((a, b) => (a[orderDesc] < b[orderDesc]) ? 1 : -1);
  }

  const limitedParticipantes = filteredParticipantes.slice(offset || 0, (offset || 0) + (limit || filteredParticipantes.length));

  res.json(limitedParticipantes);
});

module.exports = participantesRouter;
