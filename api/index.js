require('dotenv').config();
const { PORT = 3001 } = process.env;

const express = require('express');
const server = express();
const routes = require('./routes.js');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(require('morgan')('dev'));

server.use('/api', routes);

server.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

server.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));
