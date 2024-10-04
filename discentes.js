const express = require('express');
const discentesRouter = express.Router();

const discentes = [
  // Alunos da Turma 1
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
    "ano-ingresso": 2020,
    "cpf-cnpj": "98765432100",
    "descricao-forma-ingresso": "Enem",
    "email": "discente2@exemplo.com",
    "id-curso": 2,
    "id-discente": 2,
    "id-forma-ingresso": 2,
    "id-institucional": 67890,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente2",
    "matricula": 20200002,
    "nome-curso": "Direito",
    "nome-discente": "João Souza",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "18181818181",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente3@exemplo.com",
    "id-curso": 1,
    "id-discente": 3,
    "id-forma-ingresso": 1,
    "id-institucional": 65432,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente3",
    "matricula": 20240015,
    "nome-curso": "Engenharia de Software",
    "nome-discente": "Rodrigo Carvalho",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 2
  {
    "ano-ingresso": 2021,
    "cpf-cnpj": "11122233344",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente4@exemplo.com",
    "id-curso": 1,
    "id-discente": 4,
    "id-forma-ingresso": 1,
    "id-institucional": 54321,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente4",
    "matricula": 20210001,
    "nome-curso": "Engenharia de Software",
    "nome-discente": "Ana Pereira",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "19191919191",
    "descricao-forma-ingresso": "Enem",
    "email": "discente5@exemplo.com",
    "id-curso": 2,
    "id-discente": 5,
    "id-forma-ingresso": 2,
    "id-institucional": 54321,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente5",
    "matricula": 20240016,
    "nome-curso": "Direito",
    "nome-discente": "Cecília Duarte",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 3
  {
    "ano-ingresso": 2022,
    "cpf-cnpj": "22233344455",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente6@exemplo.com",
    "id-curso": 3,
    "id-discente": 6,
    "id-forma-ingresso": 1,
    "id-institucional": 23456,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente6",
    "matricula": 20220001,
    "nome-curso": "Física",
    "nome-discente": "Carlos Santana",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "10101010101",
    "descricao-forma-ingresso": "Enem",
    "email": "discente7@exemplo.com",
    "id-curso": 3,
    "id-discente": 7,
    "id-forma-ingresso": 1,
    "id-institucional": 54322,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente7",
    "matricula": 20240007,
    "nome-curso": "Física",
    "nome-discente": "Gustavo Nunes",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 4
  {
    "ano-ingresso": 2023,
    "cpf-cnpj": "33344455566",
    "descricao-forma-ingresso": "Enem",
    "email": "discente8@exemplo.com",
    "id-curso": 4,
    "id-discente": 8,
    "id-forma-ingresso": 2,
    "id-institucional": 98765,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente8",
    "matricula": 20230001,
    "nome-curso": "Química",
    "nome-discente": "Patrícia Almeida",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "11111111111",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente9@exemplo.com",
    "id-curso": 4,
    "id-discente": 9,
    "id-forma-ingresso": 1,
    "id-institucional": 43210,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente9",
    "matricula": 20240008,
    "nome-curso": "Química",
    "nome-discente": "Lívia Freitas",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 5
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "44455566677",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente10@exemplo.com",
    "id-curso": 5,
    "id-discente": 10,
    "id-forma-ingresso": 1,
    "id-institucional": 65432,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente10",
    "matricula": 20240001,
    "nome-curso": "Biologia",
    "nome-discente": "Lucas Moura",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "12121212121",
    "descricao-forma-ingresso": "Enem",
    "email": "discente11@exemplo.com",
    "id-curso": 5,
    "id-discente": 11,
    "id-forma-ingresso": 1,
    "id-institucional": 32109,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente11",
    "matricula": 20240009,
    "nome-curso": "Biologia",
    "nome-discente": "Pedro Martins",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 6
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "55566677788",
    "descricao-forma-ingresso": "Enem",
    "email": "discente12@exemplo.com",
    "id-curso": 6,
    "id-discente": 12,
    "id-forma-ingresso": 2,
    "id-institucional": 87654,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente12",
    "matricula": 20240002,
    "nome-curso": "Engenharia",
    "nome-discente": "Fernanda Oliveira",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "13131313131",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente13@exemplo.com",
    "id-curso": 6,
    "id-discente": 13,
    "id-forma-ingresso": 1,
    "id-institucional": 21098,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente13",
    "matricula": 20240010,
    "nome-curso": "Engenharia",
    "nome-discente": "Vanessa Lima",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 7
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "66677788899",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente14@exemplo.com",
    "id-curso": 7,
    "id-discente": 14,
    "id-forma-ingresso": 1,
    "id-institucional": 34567,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente14",
    "matricula": 20240003,
    "nome-curso": "Filosofia",
    "nome-discente": "Rafael Castro",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "14141414141",
    "descricao-forma-ingresso": "Enem",
    "email": "discente15@exemplo.com",
    "id-curso": 7,
    "id-discente": 15,
    "id-forma-ingresso": 1,
    "id-institucional": 10987,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente15",
    "matricula": 20240011,
    "nome-curso": "Filosofia",
    "nome-discente": "Marcelo Santos",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 8
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "77788899900",
    "descricao-forma-ingresso": "Enem",
    "email": "discente16@exemplo.com",
    "id-curso": 8,
    "id-discente": 16,
    "id-forma-ingresso": 2,
    "id-institucional": 76543,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente16",
    "matricula": 20240004,
    "nome-curso": "Sociologia",
    "nome-discente": "Bianca Ribeiro",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "15151515151",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente17@exemplo.com",
    "id-curso": 8,
    "id-discente": 17,
    "id-forma-ingresso": 1,
    "id-institucional": 98765,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente17",
    "matricula": 20240012,
    "nome-curso": "Sociologia",
    "nome-discente": "Cláudia Rocha",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 9
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "88899900011",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente18@exemplo.com",
    "id-curso": 9,
    "id-discente": 18,
    "id-forma-ingresso": 1,
    "id-institucional": 45678,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente18",
    "matricula": 20240005,
    "nome-curso": "Geografia",
    "nome-discente": "Eduardo Lopes",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "16161616161",
    "descricao-forma-ingresso": "Enem",
    "email": "discente19@exemplo.com",
    "id-curso": 9,
    "id-discente": 19,
    "id-forma-ingresso": 1,
    "id-institucional": 87654,
    "instituicao-ensino": "Universidade XYZ",
    "login": "discente19",
    "matricula": 20240013,
    "nome-curso": "Geografia",
    "nome-discente": "Fábio Lima",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  // Alunos da Turma 10
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "99900011122",
    "descricao-forma-ingresso": "Enem",
    "email": "discente20@exemplo.com",
    "id-curso": 10,
    "id-discente": 20,
    "id-forma-ingresso": 2,
    "id-institucional": 65431,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente20",
    "matricula": 20240006,
    "nome-curso": "Química Avançada",
    "nome-discente": "Juliana Costa",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  },
  {
    "ano-ingresso": 2024,
    "cpf-cnpj": "17171717171",
    "descricao-forma-ingresso": "Vestibular",
    "email": "discente21@exemplo.com",
    "id-curso": 10,
    "id-discente": 21,
    "id-forma-ingresso": 1,
    "id-institucional": 76543,
    "instituicao-ensino": "Universidade ABC",
    "login": "discente21",
    "matricula": 20240014,
    "nome-curso": "Química Avançada",
    "nome-discente": "Paula Vieira",
    "periodo-ingresso": 1,
    "sigla-nivel": "GR"
  }
  // Continuar adicionando os demais alunos até completar os 50 participantes
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
