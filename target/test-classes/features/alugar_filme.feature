@ct001
Feature: Alugar filme

  Scenario: Deve alugar filme com sucesso
    Given um filme com estoque de 2 unidades
    And que o preco do aluguel seja R$ 3
    When alugar
    Then o preco do aluguel sera R$ 3
    And a data de entrega sera no dia seguinte
    And e o estoque do filme sera 1 unidade

  Scenario: Não deve alugar filme sem estoque
    Given um filme com estoque de 0 unidades
    When alugar
    Then nao sera possivel por falta de estoque
    And e o estoque do filme sera 0 unidade

  Scenario: Deve dar condicoes especiais por categoria extendida
    Given um filme com estoque de 2 unidades
    And que o preco do aluguel seja R$ 4
    And o tipo do aluguel seja extendido
    When alugar
    Then o preco do aluguel sera R$ 8
    And a data de entrega sera em 3 dias
