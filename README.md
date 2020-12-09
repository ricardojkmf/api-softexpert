-----------------------------
REQUISITOS
-----------------------------
- FEITO - Uso de RestFul;
- Criação de containers possibilitando múltiplas réplicas de Back-end (não é necessário construir front-end);
- Uso de Kubernates ou EKS;
- FEITO - Deve descrever as chamadas a ser realizadas para consumir o back-end para realizar o crud;
- FEITO - Deve utilizar um banco de dados a sua escolha (sugestão Postgres);
- FEITO - Deve conter teste unitário;
- FEITO - Deve possuir um código limpo e simples;
- FEITO - A linguagem utilizada pode ser de sua escolha (sugestões Java ou *Node*);
- Deve armazenar o código em um repositório do GitLab, GitHub, etc;
- Deve construir uma PipeLine para executar os testes unitários a cada commit;
- Após os testes passarem com sucesso ele deve ser "deployado" em uma cloud de sua escolha (poderá utilizar alguma solução pronta "CircleCI, Travis, ..." );
- Será um diferencial aplicar um monitoramento APM (sugestão "Instana");
- Utilizar Terraform para criação da estrutura Cloud;
- Ao término do desafio deve passar uma documentação descrevendo os acessos para as ferramentas utilizadas e um descritivo de como executar o código.

-----------------------------
SEQUENCIA DO PROJETOS
-----------------------------
npm init

npm install -D nodemon

npm i dotenv express express-promise-router pg

#npm i cors dotenv express express-promise-router pg

npm install instana-nodejs-sensor

-----------------------------
POSTGRES
-----------------------------
Classe: Cadastro

- cadastroId: integer primary
- first_name: varchar
- last_name: varchar
- age: int

-----------------------------
POSTGRESS - CREATE TABLE
-----------------------------
CREATE TABLE cadastro (
    cadastroId SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL
);
