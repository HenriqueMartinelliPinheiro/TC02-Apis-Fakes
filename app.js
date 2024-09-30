const express = require('express');
const app = express();
const port = 3000;

const cursosRouter = require('./cursos');
const discentesRouter = require('./discentes');
const turmasRouter = require('./turmas');
const participantesRouter = require('./participantes');

app.use(cursosRouter);
app.use(discentesRouter);
app.use(turmasRouter)
app.use(participantesRouter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Cursos e Discentes');
});

app.listen(port, () => {
  console.log(`API de Cursos e Discentes rodando em http://localhost:${port}/`);
});
