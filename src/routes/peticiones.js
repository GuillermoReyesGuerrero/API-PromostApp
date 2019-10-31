const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req,res) => {
    res.send('API lista');
});


module.exports = router;