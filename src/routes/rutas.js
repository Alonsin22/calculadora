const { Router } = require('express');

const ruta = Router();

ruta.get('/', (req,res) => {
    res.render = ('cal');
})

module.exports = ruta;