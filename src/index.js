const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());


app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));

app.use(require('./routes/rutas'));

app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});
