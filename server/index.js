const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();

///SETTINGS 
app.set('port', process.env.PORT || 3000);
//MIDELWARE 
app.use(morgan('dev'));
app.use(express.json());
//ROUT 
app.use('/api/clientes',require('./routes/clientsrouter'));
app.use('/api/contratos', require('./routes/contratorouter'));

//STATIC FILES 
app.use(express.static(path.join(__dirname, 'public', 'index.html')))
console.log(path.join(__dirname, 'public', 'index.html'))
//MESSAGE PORT
app.listen(app.get('port'), () => {
    console.log( `Server on port ${app.get('port')}`)})
