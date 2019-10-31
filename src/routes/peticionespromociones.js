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

router.get('/promociones/:idp', (req, res) => {
    mysqlConnection.query('SELECT * FROM Promociones WHERE idPromocion = '+req.params.idp,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post('/promociones',(req,res,next) => {
    mysqlConnection.query('INSERT INTO Promociones SET? ',{
        idPromocion : req.body.idPromocion,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        TipoPromocion: req.body.TipoPromocion,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        Empresas_idEmpresa: req.body.Empresas_idEmpresa
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

router.put('/promociones/:idp',(req,res,next) => {
    mysqlConnection.query('UPDATE Promociones SET? WHERE idPromocion = '+req.params.idp,{
        //idPromocion : req.body.idPromocion,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        TipoPromocion: req.body.TipoPromocion,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
        Empresas_idEmpresa: req.body.Empresas_idEmpresa
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

router.delete('/promociones/:idp', (req, res) => {
    mysqlConnection.query('DELETE FROM Promociones WHERE idPromocion = '+req.params.idp,(err,result) => {
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

router.get('/maxpromociones', (req, res) => {
    mysqlConnection.query('SELECT MAX(idPromocion) AS Maxvalor FROM Promociones' ,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;