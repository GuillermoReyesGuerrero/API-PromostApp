const express = require('express');
//const bodyParser = require('body-parser');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

/*app.use(bodyParser.urlencoded({
    extended: false
}));*/

//app.use(bodyParser.json())

//config allows
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type, Accept, Authorization")
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods","POST, PUT, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
});

//routes
app.use(require('./routes/peticiones'));
app.use(require('./routes/peticionesusuarios'));
app.use(require('./routes/peticionesempresas'));
app.use(require('./routes/peticionessucursales'));
app.use(require('./routes/peticionespromociones'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});