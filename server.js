//Crea el server de esta api
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Aplicacion corriendo en el puerto ' + port); 
});