const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Seccion de CRUD Empresas
router.get('/empresas', (req, res) => {
    mysqlConnection.query('SELECT * FROM Empresas',(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router