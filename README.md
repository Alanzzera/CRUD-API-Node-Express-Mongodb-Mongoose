#  Festas e Serviços, CRUD API Node.js com Express, MongoDB e Mongoose

Este projeto é uma API simples para realizar operações CRUD (Create, Read, Update, Delete) utilizando Node.js, Express, MongoDB e Mongoose. 
Ele permite gerenciar serviços e festas, onde cada festa pode ter vários serviços associados.

## Requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:
- Node.js
- MongoDB

## Instalação

1. Clone o repositório:

git clone https://github.com/seu-usuario/CRUD-API-Node-Express-Mongodb-Mongoose.git

Inicie o servidor:
npm start

Insira Usuário e Senha do seu MongoDB

Estrutura do Projeto
models/: Contém os modelos Mongoose para Service e Party.
routes/: Contém as rotas da API.
controllers/: Contém os controladores para manipular as solicitações HTTP.
app.js: Arquivo principal da aplicação, onde Express é configurado e as rotas são definidas.

Uso
Serviços (Services)
POST /services: Cria um novo serviço.
GET /services: Retorna todos os serviços.
GET /services/:id: Retorna um serviço específico.
PUT /services/:id: Atualiza um serviço existente.
DELETE /services/:id: Exclui um serviço.
Festas (Parties)
POST /parties: Cria uma nova festa.
GET /parties: Retorna todas as festas.
GET /parties/:id: Retorna uma festa específica.
PUT /parties/:id: Atualiza uma festa existente.
DELETE /parties/:id: Exclui uma festa.

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
