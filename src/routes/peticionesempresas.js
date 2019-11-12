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

router.get('/empresas/:idp', (req, res) => {
    mysqlConnection.query('SELECT * FROM Empresas WHERE idEmpresa = '+req.params.idp,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post('/empresas',(req,res,next) => {
    mysqlConnection.query('INSERT INTO Empresas SET? ',{
        idEmpresa : req.body.idEmpresa,
        Nombre: req.body.Nombre,
        RFC: req.body.RFC,
        Domicilio: req.body.Domicilio,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        Usuarios_idUsuario : req.body.Usuarios_idUsuario
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

router.post('/empresas/:id',(req,res,next) => {
    mysqlConnection.query('UPDATE Empresas SET? WHERE idEmpresa = '+req.params.id,{
        //idEmpresa : req.body.idEmpresa,
        Nombre: req.body.Nombre,
        RFC: req.body.RFC,
        Domicilio: req.body.Domicilio,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        //Usuarios_idUsuario : req.body.Usuarios_idUsuario
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

router.delete('/empresas/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Empresas WHERE idEmpresa = '+req.params.id,(err,result) => {
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

router.get('/maxempresas', (req, res) => {
    mysqlConnection.query('SELECT MAX(idEmpresa) AS Maxvalor FROM Empresas' ,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router