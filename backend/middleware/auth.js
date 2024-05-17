//Ele verifica se uma requisição está autenticada antes de permitir o acesso a certas rotas.
const verifyAdmin = (req, res, next)=> {
    req.headers.mkey  === process.env.API_KEY ? next() : res.status(400).json({message: "erro no admin ,middleware"});
}

module.exports = verifyAdmin;