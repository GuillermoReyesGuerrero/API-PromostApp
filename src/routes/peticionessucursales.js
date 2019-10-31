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

router.get('/sucursales/:idp', (req, res) => {
    mysqlConnection.query('SELECT * FROM Sucursales WHERE idSucursal = '+req.params.idp,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post('/sucursales',(req,res,next) => {
    mysqlConnection.query('INSERT INTO Sucursales SET? ',{
        idSucursal : req.body.idSucursal,
        Nombre: req.body.Nombre,
        RFC: req.body.RFC,
        Domicilio: req.body.Domicilio,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        Empresas_idEmpresa : req.body.Empresas_idEmpresa
    }, (err,result) => {
        if(!err){
            //res.json(result);
            res.status(201).json({
                message: 'Successfull'
            });
        }else{
            console.log(err);
        }
    });
});

router.put('/sucursales/:id',(req,res,next) => {
    mysqlConnection.query('UPDATE Sucursales SET? WHERE idSucursal = '+req.params.id,{
        //idSucursal : req.body.idSucursal,
        Nombre: req.body.Nombre,
        RFC: req.body.RFC,
        Domicilio: req.body.Domicilio,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        Empresas_idEmpresa : req.body.Empresas_idEmpresa
    }, (err,result) => {
        if(!err){
            //res.json(result);
            res.status(201).json({
                message: 'Successfull'
            });
        }else{
            console.log(err);
        }
    });
});

router.delete('/sucursales/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Sucursales WHERE idSucursal = '+req.params.id,(err,result) => {
        if(!err){
            //res.json(result);
            res.status(201).json({
                message: 'Successfull'
            });
        }else{
            console.log(err);
        }
    });
});

router.get('/maxsucursal', (req, res) => {
    mysqlConnection.query('SELECT MAX(idSucursal) AS Maxvalor FROM Sucursales' ,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router