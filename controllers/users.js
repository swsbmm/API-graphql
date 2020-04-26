const pool = require('../database')

function getUsuario(req, res){
    const { user } = req.params;
    pool.query('SELECT * FROM Usuario WHERE K_usuario = ?', [user], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
}

function getUsuarios(req, res){
    pool.query('SELECT * FROM Usuario',(err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
}

module.exports = {
    getUsuario,
    getUsuarios

}