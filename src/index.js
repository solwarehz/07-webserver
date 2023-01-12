const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;
//TODO require hbs
app.set('view engine', 'hbs');

app.use( express.static(path.join(__dirname, 'public')) );
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(app.get('views'), 'partials'));


app.get('/', (req,res) => {
  res.render('home', {
    nombre: 'Jose Pineda',
    titulo: 'Pagina de prueba'
  });
})

app.get('/generic', (req,res) => {
  res.render('generic', {
    nombre: 'Jose Pineda',
    titulo: 'Pagina de prueba'
  });
})
app.get('/elements', (req,res) => {
  res.render('elements', {
    nombre: 'Jose Pineda',
    titulo: 'Pagina de prueba'
  });
})

app.get('*', (req,res) => {
  res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Server on http://localhost:${ port }`);
})