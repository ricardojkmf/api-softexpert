const db = require('../config/database');

// ==> Método responsável por criar um novo 'Cadastro':
exports.createCadastro = async (req, res) => {
  const { first_name, last_name, age } = req.body;
  const response = await db.query(
    'INSERT INTO cadastro (first_name, last_name, age) VALUES ($1, $2, $3)',
    [first_name, last_name, age],
  );

  res.status(201).send({
    message: 'Cadastro adicionado com sucesso!',
    body: {
      cadastro: { first_name, last_name, age },
    },
  });
};