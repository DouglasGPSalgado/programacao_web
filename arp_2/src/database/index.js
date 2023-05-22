const mongoose = require('mongoose');

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração da Promise global do Mongoose para utilizar a Promise nativa do Node.js
mongoose.Promise = global.Promise;

// Exportação do objeto do Mongoose para uso em outros módulos
module.exports = mongoose;
