<h1 align="center">
  TESTES UNITÁRIOS - IGNITE ROCKETSEAT
</h1>

<h4 align="center">
	Desafio para implementar testes unitários em uma aplicação do curso Ignite Node.JS da RocketSeat
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=October&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

# 💻 Sobre o desafio

Nesse desafio, você deverá criar testes unitários para uma aplicação já pronta usando tudo que aprendeu até agora sobre testes.

Para que você possa focar somente na parte de testes unitários sem precisar estudar muito a aplicação do zero, o template foi desenvolvido com base em uma aplicação já conhecida: **FinAPI**. A API construída no primeiro módulo da trilha.

[Link do projeto sem as implementações][linkProject]

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Test" title="#Test" src="https://raw.githubusercontent.com/jeandsontb/DesafioIginite-RocketSeat-04-Tests-Unitarios/main/screen/testUnits.png" width="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Express][express]
- [UUID][uuid]
- [JEST][jest]
- [Tsyring][tsyring]
- [Vscode][vscode]

## 💡 Como executar o projeto

Nesse repositório está a aplicação já implementada com os teste, é necessário clonar o repositório para a sua máquina e seguir as informações abaixo:

TESTES:

```bash

  Para rodar os testes execute o comando "yarn test" ou "npm run test"

```
## Especificação para realizar os testes da aplicação

Rodar o comando => yarn test

## Rotas da aplicação

Para te ajudar a entender melhor o funcionamento da aplicação como um todo, abaixo você verá uma descrição de cada rota e quais parâmetros recebe.

### POST `/api/v1/users`

A rota recebe `name`, `email` e `password` dentro do corpo da requisição, salva o usuário criado no banco e retorna uma resposta vazia com status `201`.

### POST `/api/v1/sessions`

A rota recebe `email` e `password` no corpo da requisição e retorna os dados do usuário autenticado junto à um token JWT.

Essa aplicação não possui refresh token, ou seja, o token criado dura apenas 1 dia e deve ser recriado após o período mencionado.

### GET `/api/v1/profile`

A rota recebe um token JWT pelo header da requisição e retorna as informações do usuário autenticado.

### GET `/api/v1/statements/balance`

A rota recebe um token JWT pelo header da requisição e retorna uma lista com todas as operações de depósito e saque do usuário autenticado e também o saldo total numa propriedade `balance`.

### POST `/api/v1/statements/deposit`

A rota recebe um token JWT pelo header e `amount` e `description` no corpo da requisição, registra a operação de depósito do valor e retorna as informações do depósito criado com status `201`.

### POST `/api/v1/statements/withdraw`

A rota recebe um token JWT pelo header e `amount` e `description` no corpo da requisição, registra a operação de saque do valor (caso o usuário possua saldo válido) e retorna as informações do saque criado com status `201`.

### GET `/api/v1/statements/:statement_id`

A rota recebe um token JWT pelo header e o id de uma operação registrada (saque ou depósito) na URL da rota e retorna as informações da operação encontrada.


## 📝 Feito por Jeandson Tenorio

👋🏽👋🏽👋🏽👋🏽 [contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[uuid]: https://www.npmjs.com/package/uuid
[Vscode]: https://code.visualstudio.com/
[jest]: https://jestjs.io/pt-BR/docs/getting-started
[tsyring]: https://www.npmjs.com/package/tsyringe
[linkProject]: https://github.com/rocketseat-education/ignite-template-tests-challenge
