//Este é o arquivo principal do servidor. Ele configura o servidor Express, conecta-se ao banco de dados, aplica middlewares globais, e define as rotas da aplicação.
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(express.json())
dotenv.config();
app.use(cors());

app.use("/api/recipes", require("./router/recipes"))
app.get('/backteste',  (req, res) =>{
   res.status(200).json({message: "ok"});
});

const port = 8000 || process.env.PORT;

const start = async ()=>{
    try {
        require('./db/connect')(process.env.MONGO_URL);
        app.listen(port , () => 
            console.log(`Liberado na porta ${port}!`));
    } catch (error) {
        console.log(error);
    }
};
start();