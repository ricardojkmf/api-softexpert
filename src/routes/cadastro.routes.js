const router = require('express-promise-router')();
const cadastroController = require('../controllers/cadastro.controller');

// ==> Definindo as rotas 

// ==> Rota responsável por criar um novo 'Cadastro': (POST): localhost:3000/api/cadastro
router.post('/cadastro', cadastroController.createCadastro);

module.exports = router;