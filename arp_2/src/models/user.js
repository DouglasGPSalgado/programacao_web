const mongoose = require('../database');
const bcryptjs = require('bcryptjs');

// Definição do schema de usuário
const UserSchema = new mongoose.Schema({
 name: {
    type: String,
    require: true,
 },
 email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
 },
 password: {
    type: String,
    require: true,
    select: false, // A senha não será retornada nas consultas ao banco de dados
 },
 createdAt: {
    type: Date,
    default: Date.now,
 },
});

// Middleware para hash da senha antes de salvar o usuário no banco de dados
UserSchema.pre('save', async function(next) {
   const hash = await bcryptjs.hash(this.password, 10);
   this.password = hash;

   next();
})

// Definição do modelo de usuário
const User = mongoose.model('User', UserSchema);

// Exportação do modelo de usuário para uso em outros módulos
module.exports = User;
