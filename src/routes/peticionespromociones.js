const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Seccion de CRUD Promociones
router.get('/promociones', (req, res) => {
    mysqlConnection.query('SELECT * FROM Promociones',(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;