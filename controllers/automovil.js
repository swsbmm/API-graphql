const pool = require('../database')

function getPlacas(req,res) {
    pool.query('SELECT K_placa FROM Automovil', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
}

module.exports = {
    getPlacas
}