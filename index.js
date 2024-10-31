const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const cors = require('cors');
app.use(cors());

app.listen(3000, ()=> console.log("Servidor corriendo en el puerto 3000"))