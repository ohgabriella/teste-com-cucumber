$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alugar_filme.feature");
formatter.feature({
  "line": 2,
  "name": "Alugar filme",
  "description": "",
  "id": "alugar-filme",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ct001"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Deve alugar filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "que o preco do aluguel seja R$ 3",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "a data de entrega sera no dia seguinte",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "e o estoque do filme sera 1 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 294995525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.que_o_preco_do_aluguel_seja_R$(int)"
});
formatter.result({
  "duration": 308468,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 1964843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.o_preco_do_aluguel_sera_R$(int)"
});
formatter.result({
  "duration": 4166310,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.a_data_de_entrega_sera_no_dia_seguinte()"
});
formatter.result({
  "duration": 299916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.e_o_estoque_do_filme_sera_unidade(int)"
});
formatter.result({
  "duration": 180177,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "N�o deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;n�o-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "e o estoque do filme sera 0 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 540531,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 453864,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.nao_sera_possivel_por_falta_de_estoque()"
});
formatter.result({
  "duration": 60439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.e_o_estoque_do_filme_sera_unidade(int)"
});
formatter.result({
  "duration": 109475,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve dar condicoes especiais por categoria extendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-por-categoria-extendida",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "que o preco do aluguel seja R$ 4",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "o tipo do aluguel seja extendido",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o preco do aluguel sera R$ 8",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "a data de entrega sera em 3 dias",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 698471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.que_o_preco_do_aluguel_seja_R$(int)"
});
formatter.result({
  "duration": 259432,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.o_tipo_do_aluguel_seja_extendido()"
});
formatter.result({
  "duration": 67282,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 512593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.o_preco_do_aluguel_sera_R$(int)"
});
formatter.result({
  "duration": 249739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_sera_em_dias(int)"
});
formatter.result({
  "duration": 169344,
  "status": "passed"
});
});