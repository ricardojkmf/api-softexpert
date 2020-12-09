const app = require('./src/app');

const port = process.env.PORT || 2107;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});
