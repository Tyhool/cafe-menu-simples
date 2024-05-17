//Este arquivo é responsável pela configuração e conexão com o banco de dados. 
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.set('strictQuery', false);

const connectDB =  (url) => {
    mongoose.connect(url);
}
module.exports = connectDB;