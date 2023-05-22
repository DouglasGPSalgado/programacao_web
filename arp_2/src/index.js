const express = require('express');
const app = express();

// Middleware para parse de JSON no corpo da requisição
app.use(express());

// Middleware para parse de dados de formulário no corpo da requisição
app.use(express.urlencoded({ extended: false }));

// Importação e uso do controlador de autenticação
require('./controllers/authController')(app);

// Inicialização do servidor na porta 3000
app.listen(3000);
