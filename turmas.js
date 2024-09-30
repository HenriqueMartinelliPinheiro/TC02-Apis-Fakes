const express = require('express');
const turmasRouter = express.Router();

const turmas = [
  {
    "ano": 2022,
    "capacidade-aluno": 40,
    "codigo-componente": "MAT101",
    "codigo-turma": "TURMA1",
    "descricao-horario": "3M12345 (27/08/2024 - 03/12/2024)",
    "id-componente": 1,
    "id-discente": 123,
    "id-docente": 456,
    "id-docente-externo": 789,
    "id-modalidade-educacao": 1,
    "id-situacao-turma": 1,
    "id-turma": 1,
    "id-turma-agrupadora": 0,
    "id-unidade": 1,
    "local": "Sala 101",
    "nome-componente": "Matemática",
    "periodo": 1,
    "sigla-nivel": "GR",
    "subturma": false,
    "tipo": 1,
    "utiliza-nova-turma-virtual": false
  },
  {
    "ano": 2023,
    "capacidade-aluno": 30,
    "codigo-componente": "HIS202",
    "codigo-turma": "TURMA2",
    "descricao-horario": "23M12345 7M45 7T12 (29/07/2024 - 10/08/2024), 3M12345 7M45 7T1234 (13/08/2024 - 26/08/2024), 4M3 (02/10/2024 - 27/11/2024)",
    "id-componente": 2,
    "id-discente": 124,
    "id-docente": 457,
    "id-docente-externo": 790,
    "id-modalidade-educacao": 1,
    "id-situacao-turma": 2,
    "id-turma": 2,
    "id-turma-agrupadora": 0,
    "id-unidade": 2,
    "local": "Sala 102",
    "nome-componente": "História",
    "periodo": 2,
    "sigla-nivel": "GR",
    "subturma": false,
    "tipo": 1,
    "utiliza-nova-turma-virtual": true
  }
  // Adicione mais turmas conforme necessário
];

turmasRouter.get('/turmas', (req, res) => {
  const {
    'id-turma-agrupadora': idTurmaAgrupadora,
    'turma-agrupadora': turmaAgrupadora,
    'id-unidade': idUnidade,
    ano,
    periodo,
    'sigla-nivel': siglaNivel,
    'id-componente': idComponente,
    'codigo-componente': codigoComponente,
    'id-discente': idDiscente,
    'id-docente': idDocente,
    'id-docente-externo': idDocenteExterno,
    'cpf-cnpj-docente': cpfCnpjDocente,
    'descricao-horario': descricaoHorario,
    'id-situacao-turma': idSituacaoTurma,
    'nome-componente': nomeComponente,
    'utiliza-nova-turma-virtual': utilizaNovaTurmaVirtual,
    limit,
    offset,
    'order-asc': orderAsc,
    'order-desc': orderDesc
  } = req.query;

  let filteredTurmas = turmas;

  if (idTurmaAgrupadora) {
    filteredTurmas = filteredTurmas.filter(t => t['id-turma-agrupadora'] == idTurmaAgrupadora);
  }

  if (turmaAgrupadora !== undefined) {
    filteredTurmas = filteredTurmas.filter(t => t.subturma == !JSON.parse(turmaAgrupadora));
  }

  if (idUnidade) {
    filteredTurmas = filteredTurmas.filter(t => t['id-unidade'] == idUnidade);
  }

  if (ano) {
    filteredTurmas = filteredTurmas.filter(t => t.ano == ano);
  }

  if (periodo) {
    filteredTurmas = filteredTurmas.filter(t => t.periodo == periodo);
  }

  if (siglaNivel) {
    const niveis = Array.isArray(siglaNivel) ? siglaNivel : [siglaNivel];
    filteredTurmas = filteredTurmas.filter(t => niveis.includes(t['sigla-nivel']));
  }

  if (idComponente) {
    filteredTurmas = filteredTurmas.filter(t => t['id-componente'] == idComponente);
  }

  if (codigoComponente) {
    filteredTurmas = filteredTurmas.filter(t => t['codigo-componente'].includes(codigoComponente));
  }

  if (idDiscente) {
    filteredTurmas = filteredTurmas.filter(t => t['id-discente'] == idDiscente);
  }

  if (idDocente) {
    filteredTurmas = filteredTurmas.filter(t => t['id-docente'] == idDocente);
  }

  if (idDocenteExterno) {
    filteredTurmas = filteredTurmas.filter(t => t['id-docente-externo'] == idDocenteExterno);
  }

  if (cpfCnpjDocente) {
    filteredTurmas = filteredTurmas.filter(t => t['cpf-cnpj-docente'] == cpfCnpjDocente);
  }

  // Filtro por parte da descrição do horário (dia/horário ou intervalo de datas)
  if (descricaoHorario) {
    filteredTurmas = filteredTurmas.filter(t => t['descricao-horario'].includes(descricaoHorario));
  }

  if (idSituacaoTurma) {
    const situacoes = Array.isArray(idSituacaoTurma) ? idSituacaoTurma : [idSituacaoTurma];
    filteredTurmas = filteredTurmas.filter(t => situacoes.includes(t['id-situacao-turma']));
  }

  if (nomeComponente) {
    filteredTurmas = filteredTurmas.filter(t => t['nome-componente'].includes(nomeComponente));
  }

  if (utilizaNovaTurmaVirtual !== undefined) {
    filteredTurmas = filteredTurmas.filter(t => t['utiliza-nova-turma-virtual'] == JSON.parse(utilizaNovaTurmaVirtual));
  }

  // Ordenação ascendente ou descendente
  if (orderAsc) {
    filteredTurmas = filteredTurmas.sort((a, b) => (a[orderAsc] > b[orderAsc]) ? 1 : -1);
  } else if (orderDesc) {
    filteredTurmas = filteredTurmas.sort((a, b) => (a[orderDesc] < b[orderDesc]) ? 1 : -1);
  }

  // Paginação
  const limitedTurmas = filteredTurmas.slice(offset || 0, (offset || 0) + (limit || filteredTurmas.length));

  res.json(limitedTurmas);
});

module.exports = turmasRouter;
