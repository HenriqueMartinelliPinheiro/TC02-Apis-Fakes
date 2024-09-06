const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Cursos');
});

app.get('/cursos', (req, res) => {
  const { 
    nivel, curso, ativo, 'id-unidade': idUnidade, unidade, municipio,
    'id-situacao-curso': idSituacaoCurso, 'id-modalidade-educacao': idModalidadeEducacao,
    'tipo-curso': tipoCurso, idioma, limit, offset, 'order-asc': orderAsc, 'order-desc': orderDesc
  } = req.query;

  const cursos = [
    {
      "codigo-programa-capes": "001",
      "curso": "Engenharia de Software",
      "id-coordenador": 123,
      "id-curso": 1,
      "id-modalidade-educacao": 2,
      "id-situacao-curso": 1,
      "id-unidade": 1,
      "municipio": "São Paulo",
      "nivel": "Mestrado",
      "tipo-curso": "Presencial",
      "unidade": "Universidade XYZ"
    },
    {
      "codigo-programa-capes": "002",
      "curso": "Direito",
      "id-coordenador": 124,
      "id-curso": 2,
      "id-modalidade-educacao": 3,
      "id-situacao-curso": 1,
      "id-unidade": 1,
      "municipio": "Rio de Janeiro",
      "nivel": "Graduação",
      "tipo-curso": "EAD",
      "unidade": "Universidade ABC"
    }
  ];

  let filteredCourses = cursos;

  if (curso) {
    filteredCourses = filteredCourses.filter(c => c.curso.includes(curso));
  }

  res.json(filteredCourses.slice(offset || 0, (offset || 0) + (limit || filteredCourses.length)));
});

app.listen(port, () => {
  console.log(`API simulada rodando em http://localhost:${port}/`);
});
