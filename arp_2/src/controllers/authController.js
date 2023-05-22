const express = require("express");

// Importação do modelo de usuário
const User = require("../models/User");

const router = express.Router();

// Endpoint para registro de usuário
router.post("/register", async (req, res) => {

  // Extração do email do corpo da requisição
  const { email } = req.body;

  try {
    // Verificação se o usuário já existe no banco de dados
    if ( await User.findOne({ email }) )
      return res.status(400).send({ error: "Esse usuario ja existe!" });

    // Criação do usuário no banco de dados
    const user = await User.create(req.body);

    // Remoção da senha do objeto de usuário antes de enviar a resposta
    user.password = undefined;

    // Envio da resposta com o objeto de usuário criado
    return res.send({ user });
  } catch (err) {
    // Envio de resposta de erro caso ocorra algum problema durante o registro
    return res.status(400).send({ error: "Registro falhou" });
  }
});

// Exportação do roteador para uso na aplicação
module.exports = (app) => app.use("/auth", router);
