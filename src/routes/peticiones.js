const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//raiz principal
router.get('/', (req,res) => {
    res.send('API Lista');
});

module.exports = router;