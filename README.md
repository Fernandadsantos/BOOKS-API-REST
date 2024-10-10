# API REST de Livros
 
  ### Este é um projeto de API REST para gerenciar uma coleção de livros, desenvolvido com Node.js, Express e MySQL. A API permite operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) para livros.

#### Tecnologias Utilizadas
  
  * Node.js: Ambiente de execução para JavaScript no lado do servidor. 
  * Express: Framework para Node.js que simplifica a criação de servidores.
  * MySQL: Sistema de gerenciamento de banco de dados relacional.

#### Funcionalidades

  * Listar todos os livros
  * Adicionar um novo livro
  * Atualizar informações de um livro existente
  * Deletar um livro
  * Buscar um livro por ID

####  Endpoints
  1. Listar todos os livros
* Método: GET
* Endpoint: /livros
* Descrição: Retorna uma lista de todos os livros.

 2. Adicionar um novo livro
* Método: POST
* Endpoint: /livros
* Descrição: Adiciona um novo livro.
* Corpo da requisição: 
  ```
  {
      "title": "Título do Livro",
      "author": "Nome do Autor"
  }
  ```

3. Atualizar um livro existente

* Método: PUT
* Endpoint: /livros/:id
* Descrição: Atualiza os dados de um livro específico.
* Corpo da Requisição:
  ```
  {
     "id" id do livro,
     "title": "Título do Livro",
     "author": "Nome do Autor"
  }
  ```

4. Deletar um livro

* Método: DELETE
* Endpoint: /livros/:id
* Descrição: Remove um livro específico.

5. Buscar um livro por ID

* Método: GET
* Endpoint: /livros/:id
* Descrição: Retorna os detalhes de um livro específico.
 
