# IUUL_Desafio_2.1

# Documentação - Aplicação conversor de moedas

## Minimundo
Desenvolver uma aplicação console conversor.js em Javascript (Node.js) que realiza a conversão de valores monetários entre diferentes moedas. A aplicação deve ler a moeda origem, a moeda destino e um valor monetário e apresentar esse valor convertido da moeda origem para a moeda destino e a taxa de conversão. Para realizar a conversão propriamente dita deve ser consumido o serviço de conversão de moedas exchangerate.


## Documentação API - Exchangerate
- **Link da documentação:** [exchangerateAPIdocs](https://www.exchangerate-api.com/docs/overview) 
- **URI de Conversão do valor de USD 100,00 para reais:** https://v6.exchangerate-api.com/v6/e9a000049e3a129fbef6d624/pair/EUR/GBP


#### Template base da Interface do Usuario: 
O que está em aspas simples é a entrada do usuário
```
Moeda de Origem: 'BRL'
Moeda de Destino: 'USD'
Valor de Origem: 850,70

'BRL' '850,70' => 'USD' 181,20
Taxa: 0,213003
```

## Regras de Negócio

### RN0 - Moeda Origem tem que ser diferente de Moeda Destino
### RN1 - Moeda de Origem e Moeda de Destino devem ter exatamente 3 caracteres
### RN2 - Valor de Origem tem que ser maior que 0 (zero)
### RN3 - Valor convertido deve ser arredondado para 2 casas decimais
### RN4 - A taxa deve ser apresentada com 6 casas decimais
### RN5 - O programa deve terminar quando o usuário digitar string vazia para a moeda de origem
### RN6 - Erro de comunicação com a API: Deve ser apresentada a mensagem de erro correspondente
### RN7 - Problemas na conversão: Deve ser apresentada a mensagem de erro correspondente