const { Router } = require('express');

const ruta = Router();
const path = require('path');

ruta.get('/', (req,res) => {res.sendFile(path.join(__dirname,'../vistas/cal.html'));});
ruta.get('/Historial', (req,res) => {res.sendFile(path.join(__dirname,'../vistas/historial.html'));});

module.exports = ruta;