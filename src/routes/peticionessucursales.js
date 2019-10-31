const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Seccion de CRUD Sucursales
router.get('/sucursales', (req, res) => {
    mysqlConnection.query('SELECT * FROM Sucursales',(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router