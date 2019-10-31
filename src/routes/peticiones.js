const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//raiz principal
router.get('/', (req,res) => {
    res.send('API Lista');
});

//Seccion de CRUD Login
router.get('/login', (req, res) => {
    mysqlConnection.query('SELECT * FROM Login',(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.get('/login/:idl', (req, res) => {
    mysqlConnection.query('SELECT * FROM Login WHERE idLogin = '+req.params.idl,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post('/login',(req,res,next) => {
    mysqlConnection.query('INSERT INTO Login SET? ',{
        idLogin : req.body.idLogin,
        Usuario: req.body.Usuario,
        Contraseña: req.body.Contraseña,
        TipoUsuario: req.body.TipoUsuario
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

router.put('/login/:idl',(req,res,next) => {
    mysqlConnection.query('UPDATE Login SET? WHERE idLogin = '+req.params.idl,{
        //idLogin : req.body.idLogin,
        Usuario: req.body.Usuario,
        Contraseña: req.body.Contraseña,
        TipoUsuario: req.body.TipoUsuario
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

router.delete('/login/:idl', (req, res) => {
    mysqlConnection.query('DELETE FROM Login WHERE idLogin = '+req.params.idl,(err,result) => {
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

router.get('/maxlogin', (req, res) => {
    mysqlConnection.query('SELECT MAX(idLogin) AS Maxvalor FROM Login' ,(err,result) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;