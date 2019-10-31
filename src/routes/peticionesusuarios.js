const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Seccion de CRUD Usuarios
router.get('/usuarios', (req, res) => {
    mysqlConnection.query('SELECT * FROM Usuarios',(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.get('/usuarios/:idu', (req, res) => {
    mysqlConnection.query('SELECT * FROM Usuarios WHERE idUsuario = '+req.params.idu,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post('/usuarios',(req,res,next) => {
    mysqlConnection.query('INSERT INTO Usuarios SET? ',{
        idUsuario : req.body.idUsuario,
        Nombre: req.body.Nombre,
        ApellidoPaterno: req.body.ApellidoPaterno,
        ApellidoMaterno: req.body.ApellidoMaterno,
        Domicilio: req.body.Domicilio,
        Telefono: req.body.Telefono,
        RFC: req.body.RFC,
        Usuario: req.body.Usuario,
        Contraseña: req.body.Contraseña,
        TipoUsuario: req.body.TipoUsuario,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion
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

router.put('/usuarios/:idu',(req,res,next) => {
    mysqlConnection.query('UPDATE Usuarios SET? WHERE idUsuario = '+req.params.idu,{
        //idUsuario : req.body.idUsuario,
        Nombre: req.body.Nombre,
        ApellidoPaterno: req.body.ApellidoPaterno,
        ApellidoMaterno: req.body.ApellidoMaterno,
        Domicilio: req.body.Domicilio,
        Telefono: req.body.Telefono,
        RFC: req.body.RFC,
        Usuario: req.body.Usuario,
        Contraseña: req.body.Contraseña,
        TipoUsuario: req.body.TipoUsuario,
        Activo: req.body.Activo,
        FechaCreacion: req.body.FechaCreacion,
        FechaModificacion: req.body.FechaModificacion,
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

router.delete('/usuarios/:idu', (req, res) => {
    mysqlConnection.query('DELETE FROM Usuarios WHERE idUsuario = '+req.params.idu,(err,result) => {
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

router.get('/maxusuarios', (req, res) => {
    mysqlConnection.query('SELECT MAX(idUsuario) AS Maxvalor FROM Usuarios' ,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;