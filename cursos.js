const express = require('express');
const cursosRouter = express.Router();

// Dados de exemplo para Cursos
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

// Endpoint de GET para Cursos
cursosRouter.get('/cursos', (req, res) => {
  const { curso, limit, offset } = req.query;
  let filteredCourses = cursos;

  // Filtro por nome de curso
  if (curso) {
    filteredCourses = filteredCourses.filter(c => c.curso.includes(curso));
  }

  // Paginação
  res.json(filteredCourses.slice(offset || 0, (offset || 0) + (limit || filteredCourses.length)));
});

module.exports = cursosRouter;
