'use strict';

require('dotenv').load();

const express = require('express')
, bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, app = express()
, pool = require('./bd/pool-factory')
, connectionMiddleware = require('./bd/connection-middleware');

app.use(bodyParser.json());//converter corpo da requisição em json
app.use(bodyParser.urlencoded({ extended: false})); // negar codificação ex %20...
app.use(cookieParser());

app.use(connectionMiddleware(pool));

/* Registrar as rotas */

const usuarios_routes = require('./src/usuarios/usuarios_routes');
app.use('/usuarios', usuarios_routes);


//Carrega as Rotas
// const usuarios_route = require('./routes/usuarios');
// app.use('/usuarios', usuarios_route);

//Conecta ao banco
//mongoose.connect(config.connectionString);

//Carrega as Rotas
//const indexRoute = require('./routes/index-route');
/*
const produtoRoute = require('./routes/produto-route');
const clienteRoute = require('./routes/cliente-route');
const ordemRoute = require('./routes/ordem.route');
*/

/*
app.use('/produto', produtoRoute);
app.use('/cliente', clienteRoute);
app.use('/ordem', ordemRoute);
*/

const index = require('./src/testes/index');
app.use('/', index);

module.exports = app;