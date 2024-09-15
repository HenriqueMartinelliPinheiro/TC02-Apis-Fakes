const express = require('express');
const app = express();
const port = 3000;

// Importando as rotas de cursos e discentes
const cursosRouter = require('./cursos');
const discentesRouter = require('./discentes');

// Usando as rotas no app principal, sem o prefixo /api
app.use(cursosRouter);
app.use(discentesRouter);

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Cursos e Discentes');
});

app.listen(port, () => {
  console.log(`API de Cursos e Discentes rodando em http://localhost:${port}/`);
});
