const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { patch } = require('./routes/rutas');
app.use(cors());


app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,"calculadora_index")));
app.use(require('./routes/rutas'));

app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});
